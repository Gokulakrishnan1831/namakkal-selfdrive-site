import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WHATSAPP_NUMBER_1 = "918056557212";
const WHATSAPP_NUMBER_2 = "918754716212";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I want to book a car in Namakkal. Please share the available cars and rates.");
const INSTAGRAM_URL = "https://www.instagram.com/namakkal.selfdrivecars?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const openWhatsApp = (number: string) => {
  window.open(`https://wa.me/${number}?text=${WHATSAPP_MESSAGE}`, "_blank");
};

const services = [
  {
    icon: "fa-car",
    title: "Self Drive Cars",
    description: "Drive yourself with freedom. Wide range of well-maintained cars available for self-drive rental.",
    highlight: false,
  },
  {
    icon: "fa-user-tie",
    title: "Cars with Driver",
    description: "Sit back and relax while our professional drivers take you anywhere in Tamil Nadu.",
    highlight: false,
  },
  {
    icon: "fa-id-card",
    title: "Acting Driver",
    description: "Need a driver for your own car? Our experienced acting drivers are ready to serve you.",
    highlight: false,
  },
  {
    icon: "fa-plane-arrival",
    title: "Book from UK/Europe",
    description: "NRIs can book from abroad and pick up the car on arrival in Tamil Nadu. Seamless experience!",
    highlight: true,
  },
];

const fleet = [
  {
    name: "Maruti Swift",
    image: "/attached_assets/image_1767379073102.png",
    category: "Hatchback",
  },
  {
    name: "Maruti Dzire",
    image: "/attached_assets/image_1767379105554.png",
    category: "Sedan",
  },
  {
    name: "Hyundai Verna",
    image: "/attached_assets/image_1767379203953.png",
    category: "Premium Sedan",
  },
  {
    name: "Nissan Sunny",
    image: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=800&auto=format&fit=crop&q=80",
    category: "Sedan",
  },
  {
    name: "Nissan Magnite",
    image: "/attached_assets/image_1767379251591.png",
    category: "SUV",
  },
  {
    name: "Hyundai i20",
    image: "/attached_assets/image_1767379279936.png",
    category: "Premium Hatchback",
  },
  {
    name: "Maruti Ertiga",
    image: "/attached_assets/image_1767379319039.png",
    category: "MPV",
  },
];

const benefits = [
  { icon: "fa-shield-halved", title: "Insurance Covered", description: "Comprehensive insurance included" },
  { icon: "fa-road", title: "Unlimited Kms", description: "No hidden charges for distance" },
  { icon: "fa-spray-can-sparkles", title: "Clean & Sanitised", description: "Thoroughly cleaned vehicles" },
  { icon: "fa-bolt", title: "Instant Booking", description: "Quick WhatsApp confirmation" },
  { icon: "fa-headset", title: "24/7 Support", description: "Round the clock assistance" },
  { icon: "fa-location-dot", title: "Pickup/Drop", description: "Anywhere in Namakkal" },
];

export default function Home() {
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Namakkal Self Drive Cars"
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              data-testid="img-logo"
            />
            <span className="font-bold text-lg text-primary hidden sm:block" data-testid="text-brand-name">
              Namakkal Self Drive
            </span>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors"
            data-testid="link-instagram-navbar"
          >
            <i className="fa-brands fa-instagram text-2xl" />
            <span className="hidden sm:inline text-sm font-medium">Follow Us</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-16 parallax-bg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&auto=format&fit=crop&q=80')`,
        }}
        data-testid="section-hero"
      >
        <div className="container mx-auto px-4 py-12 text-center text-white">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            data-testid="text-hero-title"
          >
            Namakkal Self Drive Cars
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 font-light"
            data-testid="text-hero-tagline"
          >
            Self Drive | With Driver | Acting Driver | Book from UK & Drive in India
          </p>

          {/* Feature bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {[
              "Wide range of well-maintained cars",
              "24x7 support & roadside assistance",
              "Affordable rates starting ₹3500/day",
              "Book from UK → Pick up in Tamil Nadu",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
                data-testid={`feature-bullet-${index}`}
              >
                <i className="fa-solid fa-circle-check text-green-400 text-xl flex-shrink-0" />
                <span className="text-left text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => openWhatsApp(WHATSAPP_NUMBER_1)}
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground rounded-full whatsapp-pulse backdrop-blur-sm"
              data-testid="button-whatsapp-hero-1"
            >
              <i className="fa-brands fa-whatsapp text-xl mr-2" />
              Call: +91 80565 57212
            </Button>
            <Button
              onClick={() => openWhatsApp(WHATSAPP_NUMBER_2)}
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground rounded-full backdrop-blur-sm"
              data-testid="button-whatsapp-hero-2"
            >
              <i className="fa-brands fa-whatsapp text-xl mr-2" />
              Call: +91 87547 16212
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i className="fa-solid fa-chevron-down text-white/70 text-2xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={addToRefs}
        className="py-16 md:py-24 bg-muted/30 fade-in-up"
        id="services"
        data-testid="section-services"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5">
              Our Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground" data-testid="text-services-title">
              What We Offer
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Choose the perfect service for your travel needs in Tamil Nadu
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`transition-shadow duration-300 hover:shadow-lg border ${
                  service.highlight
                    ? "border-primary bg-primary/5 dark:bg-primary/10"
                    : "border-border"
                }`}
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      service.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-primary"
                    }`}
                  >
                    <i className={`fa-solid ${service.icon} text-2xl`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  {service.highlight && (
                    <Badge className="mt-4 bg-primary text-primary-foreground">Unique Service</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section
        ref={addToRefs}
        className="py-16 md:py-24 fade-in-up"
        id="fleet"
        data-testid="section-fleet"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5">
              Our Fleet
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground" data-testid="text-fleet-title">
              Choose Your Ride
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              From compact hatchbacks to premium SUVs, we have the perfect car for every journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fleet.map((car, index) => (
              <Card
                key={index}
                className="transition-shadow duration-300 hover:shadow-lg border border-border overflow-visible"
                data-testid={`card-car-${index}`}
              >
                <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {car.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground">{car.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={addToRefs}
        className="py-16 md:py-24 bg-muted/30 fade-in-up"
        id="why-us"
        data-testid="section-why-us"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5">
              Why Us
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground" data-testid="text-why-us-title">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Experience hassle-free car rentals with our premium services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-4 md:p-6 rounded-xl bg-card border border-border transition-shadow duration-300 hover:shadow-md"
                data-testid={`benefit-${index}`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <i className={`fa-solid ${benefit.icon} text-primary text-lg md:text-xl`} />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={addToRefs}
        className="py-16 md:py-24 bg-primary text-primary-foreground fade-in-up"
        data-testid="section-cta"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
            Ready to Hit the Road?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book your self-drive car today and explore Tamil Nadu at your own pace.
            Our team is available 24/7 to assist you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => openWhatsApp(WHATSAPP_NUMBER_1)}
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground rounded-full whatsapp-pulse"
              data-testid="button-whatsapp-cta-1"
            >
              <i className="fa-brands fa-whatsapp text-xl mr-2" />
              +91 80565 57212
            </Button>
            <Button
              onClick={() => openWhatsApp(WHATSAPP_NUMBER_2)}
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground rounded-full"
              data-testid="button-whatsapp-cta-2"
            >
              <i className="fa-brands fa-whatsapp text-xl mr-2" />
              +91 87547 16212
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground dark:bg-card py-12" data-testid="section-footer">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-background dark:text-foreground mb-4">
                Namakkal Self Drive Cars
              </h3>
              <p className="text-background/70 dark:text-muted-foreground text-sm mb-4">
                Your trusted partner for self-drive car rentals in Tamil Nadu.
                Experience freedom on the road with our well-maintained fleet.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105"
                data-testid="link-instagram-footer"
              >
                <i className="fa-brands fa-instagram text-lg" />
                Follow on Instagram
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-background dark:text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-background/70 dark:text-muted-foreground text-sm">
                <li>
                  <a href="#services" className="hover:text-background dark:hover:text-foreground transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#fleet" className="hover:text-background dark:hover:text-foreground transition-colors">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-background dark:hover:text-foreground transition-colors">
                    Why Choose Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-background dark:text-foreground mb-4">
                Contact Us
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => openWhatsApp(WHATSAPP_NUMBER_1)}
                  className="flex items-center gap-3 mx-auto md:mx-0 text-background/80 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors"
                  data-testid="button-whatsapp-footer-1"
                >
                  <i className="fa-brands fa-whatsapp text-whatsapp text-xl" />
                  <span>+91 80565 57212</span>
                </button>
                <button
                  onClick={() => openWhatsApp(WHATSAPP_NUMBER_2)}
                  className="flex items-center gap-3 mx-auto md:mx-0 text-background/80 dark:text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors"
                  data-testid="button-whatsapp-footer-2"
                >
                  <i className="fa-brands fa-whatsapp text-whatsapp text-xl" />
                  <span>+91 87547 16212</span>
                </button>
                <div className="flex items-center gap-3 justify-center md:justify-start text-background/80 dark:text-muted-foreground">
                  <i className="fa-solid fa-location-dot text-xl" />
                  <span>Namakkal, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 dark:border-border mt-8 pt-8 text-center">
            <p className="text-background/60 dark:text-muted-foreground text-sm">
              © {new Date().getFullYear()} Namakkal Self Drive Cars. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
