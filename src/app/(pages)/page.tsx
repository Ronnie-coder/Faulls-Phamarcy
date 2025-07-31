import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/Testimonials";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Truck, Store, CarFront } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Welcome to Faull’s Pharmacy (Demo)
          </h1>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground md:text-lg">
            Serving Glenlily and Parow with care since 1995.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/order">Order Prescription Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Convenient Ways to Get Your Medicine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Truck className="w-12 h-12 mx-auto text-primary" />
                <CardTitle className="mt-4">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get your prescriptions and wellness products delivered right to your doorstep.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Store className="w-12 h-12 mx-auto text-primary" />
                <CardTitle className="mt-4">In-Store Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Order ahead and collect at your convenience from our friendly staff.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CarFront className="w-12 h-12 mx-auto text-primary" />
                <CardTitle className="mt-4">Curbside Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay in your car. We’ll bring your order out to you safely and quickly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}