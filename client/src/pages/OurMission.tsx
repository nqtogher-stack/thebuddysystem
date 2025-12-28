import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Target, Heart, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function OurMission() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/basketball.jpg" 
            alt="Wheelchair basketball" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Empowering young disabled athletes through mentorship, guidance, and support to pursue their dreams in para sports.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="bg-card border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-2">
                  <Target className="h-8 w-8 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-card-foreground leading-relaxed">
                  To empower disabled primary school athletes (aged 8-14) through mentorship from experienced disabled athletes, helping them develop their understanding of para sport, grow their skills, and pursue their dreams with confidence and support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-2">
                  <Heart className="h-8 w-8 text-secondary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-card-foreground leading-relaxed">
                  A world where every disabled child has access to mentorship, guidance, and opportunities to pursue para sport. A future where disability diversity is celebrated, and young athletes see themselves represented in athletics at every level.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Objectives */}
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">What We're Trying to Achieve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Develop Understanding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Help disabled kids aged 8-15 grow their understanding of their sport and their training through personalized mentorship from experienced athletes who understand their unique journey.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-secondary" />
                  Create Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Provide more opportunities for disabled kids to participate in sport and discover their potential in para athletics, breaking down barriers to access and participation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-accent" />
                  Raise Awareness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Increase visibility and awareness for young disabled athletes, helping them find the support and resources they need to succeed in their para sport pursuits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Achieve It */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">How We Achieve Our Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Direct Mentorship</h3>
              <p className="text-card-foreground leading-relaxed">
                We match young athletes with experienced disabled athlete mentors who provide one-on-one guidance, support, and inspiration. Our mentors understand the unique challenges young disabled athletes face and can provide authentic, relatable guidance.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Education & Resources</h3>
              <p className="text-card-foreground leading-relaxed">
                We provide comprehensive information about para sports, training methods, and pathways to help young athletes make informed decisions about their athletic future.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Community Building</h3>
              <p className="text-card-foreground leading-relaxed">
                We create inclusive communities where young athletes connect with peers, celebrate achievements, and build lasting relationships that provide ongoing support.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Visibility & Representation</h3>
              <p className="text-card-foreground leading-relaxed">
                We showcase disabled athletes as role models and champions, helping young athletes see themselves represented in sports and envision their own future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Core Values</h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Compassion</h3>
              <p className="text-muted-foreground leading-relaxed">
                We care deeply about the wellbeing and success of every young athlete in our program.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                We build inclusive communities where every athlete feels valued and supported.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Empowerment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We empower young athletes to achieve their goals and reach their full potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strive for excellence in everything we do and the support we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Help Us Achieve Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us in empowering young disabled athletes. Whether as a young athlete, mentor, or supporter, you can make a difference.
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="text-lg px-8">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-auto" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Empowering young disabled athletes through mentorship and support.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</Link>
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</Link>
                <Link href="/problem" className="block text-muted-foreground hover:text-primary transition-colors">The Problem</Link>
                <Link href="/about-us" className="block text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Email: info@thebuddysystem.org<br />
                Phone: 1800 BUDDY SYS<br />
                Location: Australia Wide
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 The Buddy System. All rights reserved. | A non-profit organization dedicated to empowering young disabled athletes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
