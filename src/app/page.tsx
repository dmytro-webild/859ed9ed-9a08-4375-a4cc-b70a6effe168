"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="HOTTO"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="HOTTO"
      description="Experience the finest Asian Fusion cuisine in Addis Ababa. Authentic flavors meet modern culinary artistry."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/sushi-dish-asian-restaurant_23-2148195622.jpg"
      imageAlt="Asian Fusion Atmosphere"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="A New Standard in Asian Fusion"
      buttons={[
        {
          text: "Discover More",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Signature",
          name: "Beef Fillet",
          price: "ETB 2,500",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-roasted-beef-with-lettuce-red-chili-pepper-plate-wood_141793-11154.jpg",
        },
        {
          id: "2",
          brand: "Appetizer",
          name: "Vegetable Gyoza",
          price: "ETB 1,200",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/dim-sum-dumpling_74190-5968.jpg",
        },
        {
          id: "3",
          brand: "Seafood",
          name: "Tempura Shrimp",
          price: "ETB 1,800",
          rating: 5,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/batter-fried-prawns-wood_1339-7706.jpg",
        },
        {
          id: "4",
          brand: "Main",
          name: "Stir Fried Glass Noodles",
          price: "ETB 1,500",
          rating: 4,
          reviewCount: "60",
          imageSrc: "http://img.b2bpic.net/free-photo/noodles-prepared-with-mushrooms-bell-peppers-sauce_141793-1225.jpg",
        },
        {
          id: "5",
          brand: "Vegan",
          name: "Avocado Tofu Teriyaki",
          price: "ETB 1,600",
          rating: 5,
          reviewCount: "45",
          imageSrc: "http://img.b2bpic.net/free-photo/crispy-fried-pork-fried-with-chilies_1339-6657.jpg",
        },
        {
          id: "6",
          brand: "Salad",
          name: "Green Salad",
          price: "ETB 800",
          rating: 4,
          reviewCount: "30",
          imageSrc: "http://img.b2bpic.net/free-photo/salad-with-radish-bread_23-2147761590.jpg",
        },
      ]}
      title="Our Signature Dishes"
      description="Hand-crafted flavors using the freshest local and imported ingredients."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "2000+",
          description: "Happy Guests Served",
        },
        {
          id: "m2",
          value: "4.5",
          description: "Average Rating",
        },
        {
          id: "m3",
          value: "282+",
          description: "Verified Reviews",
        },
      ]}
      title="Excellence in Numbers"
      description="Delivering quality consistently to our valued guests."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "t1",
          name: "Chef Kenji",
          role: "Executive Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-smiling-lady-shirt-jeans-sitting-bar-counter-cafe-with-fork-hand-cake-near-dreamily-looking-aside_574295-293.jpg",
        },
        {
          id: "t2",
          name: "Chef Sora",
          role: "Sous Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-friends-shaking-hands_23-2148395404.jpg",
        },
        {
          id: "t3",
          name: "Chef Hana",
          role: "Pastry Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-enyoing-dinner-party_23-2150717871.jpg",
        },
      ]}
      title="Meet Our Culinary Team"
      description="Passionate chefs crafting your next favorite meal."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Marcus L.",
          date: "1 week ago",
          title: "Great vibe",
          quote: "The atmosphere is top-notch. Love the fusion menu variety.",
          tag: "Diner",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-image-happy-smiling-woman-enjoy-her-morning-french-breakfast-open-cafe-terrace-tasty-organic-food-holding-french-croissant-her-hand_291049-526.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/sushi-dish-asian-restaurant_23-2148195622.jpg",
          imageAlt: "happy diner portrait",
        },
        {
          id: "2",
          name: "Sofia R.",
          date: "2 weeks ago",
          title: "Excellent Service",
          quote: "Truly unique flavors. The Gyoza is a must-try.",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-family-sitting-table_23-2147810816.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-vegetarian-balls-served-bowl_1220-7582.jpg",
          imageAlt: "happy diner portrait",
        },
        {
          id: "3",
          name: "David K.",
          date: "3 weeks ago",
          title: "Good quality",
          quote: "Delicious ingredients and very professional service.",
          tag: "Foodie",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-kitchen_23-2149631733.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-roasted-beef-with-lettuce-red-chili-pepper-plate-wood_141793-11154.jpg",
          imageAlt: "happy diner portrait",
        },
        {
          id: "4",
          name: "Elena M.",
          date: "1 month ago",
          title: "Fine Dining",
          quote: "Perfect for a special occasion. Highly recommended.",
          tag: "Guest",
          avatarSrc: "http://img.b2bpic.net/free-photo/friends-eating-restaurant_23-2148006623.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/dim-sum-dumpling_74190-5968.jpg",
          imageAlt: "happy diner portrait",
        },
        {
          id: "5",
          name: "Alex B.",
          date: "2 months ago",
          title: "Great value",
          quote: "Consistent quality and great portions for the price.",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-with-messy-bun-hair-style_23-2149459208.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/batter-fried-prawns-wood_1339-7706.jpg",
          imageAlt: "happy diner portrait",
        },
      ]}
      title="Guest Stories"
      description="Hear what our patrons say about their experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer take-away?",
          content: "Yes, all items on our menu are available for take-away. Order via our website.",
        },
        {
          id: "f2",
          title: "Do I need a reservation?",
          content: "We recommend booking a table, especially on weekends, to avoid any waiting time.",
        },
        {
          id: "f3",
          title: "Are there vegan options?",
          content: "Absolutely! We have a curated selection of vegan dishes, including our Avocado Tofu Teriyaki.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about dining at HOTTO."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contact Us"
      title="Visit Us Today"
      description="Find us at The Place Building, Cape Verde St, Addis Ababa. We are open daily."
      imageSrc="http://img.b2bpic.net/free-photo/city-night-with-vibrant-lights_23-2149836919.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="HOTTO"
      copyrightText="© 2025 HOTTO Addis Ababa"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
