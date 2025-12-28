import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Heart, Users, Target, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/mentorship.jpg" 
            alt="Mentorship" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              About The Buddy System
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Discover our mission, values, and commitment to empowering young disabled athletes across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Buddy System is a non-profit organization dedicated to transforming the lives of disabled primary school athletes through mentorship and support. We believe that every young athlete deserves the opportunity to pursue their dreams in para sport, regardless of their abilities.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded on the principle that mentorship changes lives, we connect young disabled athletes aged 8-14 years with experienced, disabled athlete mentors who understand their journey and can guide them toward success.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our organization operates across Australia, working with schools, sports organizations, and families to create pathways for young athletes to discover their potential in para athletics.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/action.jpg" 
                alt="Athletes in action" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-muted/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
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
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Mentorship Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We match young athletes with experienced disabled athlete mentors who provide guidance, support, and inspiration throughout their para sport journey.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-secondary" />
                  Education & Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We provide resources, workshops, and training to help young athletes understand para sports, develop their skills, and build confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-accent" />
                  Community Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We create inclusive communities where young athletes connect with peers, celebrate achievements, and build lasting relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Ready to Get Involved?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a young athlete seeking guidance or an experienced mentor ready to inspire, we'd love to have you join The Buddy System.
          </p>
          <Button size="lg" className="text-lg px-8">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-10" />
                <span className="font-bold text-xl text-primary">{APP_TITLE}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Empowering young disabled athletes through mentorship and support.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</Link>
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                <Link href="/problem" className="block text-muted-foreground hover:text-primary transition-colors">The Problem</Link>
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
