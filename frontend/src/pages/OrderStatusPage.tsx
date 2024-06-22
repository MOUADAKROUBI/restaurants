import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Loading from "./Loading";
import { Helmet } from "react-helmet";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <Loading />;
  }

  if (!orders || orders.length === 0) {
    return (
      <span className="text-gray-500 font-bold text-2xl capitalize text-center">
        No orders found
      </span>
    );
  }

  return (
    <>
      <Helmet>
        <title>Order Status - FoodieFinds</title>
        <meta
          name="description"
          content="Check the status of your recent orders on FoodieFinds. Stay updated with real-time information on your order's progress."
        />
        <meta
          name="keywords"
          content="order status, track order, FoodieFinds, food delivery, order progress"
        />
      </Helmet>
      <div className="space-y-10">
        {orders.map((order) => (
          <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
            <OrderStatusHeader order={order} />
            <div className="grid gap-10 md:grid-cols-2">
              <OrderStatusDetail order={order} />
              <AspectRatio ratio={16 / 5}>
                <img
                  src={order.restaurant.imageUrl}
                  className="rounded-md object-cover h-full w-full"
                />
              </AspectRatio>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderStatusPage;
