import { Suspense } from "react";
import ProductCarousel from "../products/ProductCarousel";
import ProductListSkeleton from "@/components/ui/skeletons/product/ProductListSkeleton";

async function getReligiousProduct(params) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/category/${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return {
        success: false,
        message: "Failed to fetch religious product",
        status: res.status,
        data: [],
      };
    }

    const data = await res.json();

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.error("Error fetching religious product:", error);

    return {
      success: false,
      message: "An error occurred while fetching the religious product",
      data: [],
    };
  }
}
const ReligiousCollection = async () => {
  const data = await getReligiousProduct("religious");
  if (data.length === 0) {
    return null;
  }
  return (
    <>
      <Suspense fallback={<ProductListSkeleton />}>
        {data.data && (
          <ProductCarousel
            products={data.data.data}
            label="Religious Collection"
          />
        )}
      </Suspense>
    </>
  );
};

export default ReligiousCollection;