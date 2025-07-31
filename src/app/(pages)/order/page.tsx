import { OrderForm } from "@/components/OrderForm";

export default function OrderPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Submit Your Prescription</h1>
          <p className="text-muted-foreground mt-2">
            Fill out the form below and upload a photo of your prescription to get started.
          </p>
        </div>
        <OrderForm />
      </div>
    </div>
  );
}