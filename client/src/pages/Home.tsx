import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { ArrowRight, Users, Target, TrendingUp, Heart, Award } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/hero-image.jpg" 
            alt="Young disabled athlete" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Empowering Young Athletes Through Mentorship
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
              Connecting disabled primary school athletes with experienced para sport mentors to guide them on their pathway to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="text-lg px-8">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">What is The Buddy System?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Buddy System is a non-profit organization dedicated to mentoring disabled primary school athletes aged 8-14 years old. We connect young athletes with older, experienced disabled athletes who serve as mentors and role models.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mentorship program provides guidance, support, and inspiration to help young disabled athletes understand their sport pathway, develop their skills, and pursue their dreams in para sport. We believe that every child deserves the opportunity to excel in athletics, regardless of their abilities.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/mentorship.jpg" 
                alt="Mentorship in action" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">The Problem We're Solving</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Young disabled athletes face significant barriers in pursuing para sport. Understanding these challenges is the first step toward creating meaningful change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Lack of Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Primary school aged kids need guidance on how to pursue para sport. Young disabled athletes are often uneducated on their pathway to success, leaving them without clear direction or support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Harder to Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Due to their disability, it is harder for disabled athletes to progress compared to able-bodied athletes. They face unique challenges that require specialized support and understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  No Role Models
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  There is no inclusion in able-bodied sport, no current information on para sport programs, and critically, no role models in para sport for these young athletes to look up to.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-card-foreground">The Scale of the Issue</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">11%</div>
                <p className="text-lg text-card-foreground font-medium">
                  of Australian children aged 0-14 years were identified as having a disability in 2022 (ABS)
                </p>
              </div>
              <div className="text-center p-6 bg-accent/5 rounded-xl">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-3">75%</div>
                <p className="text-lg text-card-foreground font-medium">
                  of Australians with physical impairment who want to pursue sport don't, due to lack of knowledge, availability, and funding (Paralympics Australia)
                </p>
              </div>
            </div>
            <p className="text-center mt-8 text-lg text-card-foreground font-semibold">
              This issue is critical if we want to have a world with disability diversity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are committed to creating opportunities and raising awareness for young disabled athletes across Australia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/basketball.jpg" 
                alt="Wheelchair basketball" 
                className="w-full h-full object-cover" style={{paddingTop: '9px'}}
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Develop Understanding</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Help disabled kids aged 8-15 grow their understanding of their sport and their training through personalized mentorship from experienced athletes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Create Opportunities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Provide more opportunities for disabled kids to participate in sport and discover their potential in para athletics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Raise Awareness</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Increase visibility and awareness for young disabled athletes, helping them find the support and resources they need to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mentorship program connects young athletes with experienced mentors through a simple, supportive process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Sign Up</h3>
              <p className="text-muted-foreground leading-relaxed">
                Young athletes and their families register with The Buddy System, sharing their interests and goals in para sport.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Get Matched</h3>
              <p className="text-muted-foreground leading-relaxed">
                We carefully match each young athlete with an experienced disabled athlete mentor who shares similar interests and experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Grow Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mentors guide their buddies through training, competition, and personal development, building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why We're Different</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Previous attempts to address this issue have fallen short. The Buddy System fills critical gaps that existing programs miss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-2">
              <CardHeader>
                <CardTitle className="text-xl">AABU Sport Australia Hall of Fame Scholarships</CardTitle>
                <CardDescription className="text-base">Previous Attempt</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  While this program offers valuable scholarships, sports are limited and it is not aimed at primary aged athletes. Young children need support earlier in their development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2">
              <CardHeader>
                <CardTitle className="text-xl">CPSARA Parent Mentor Program</CardTitle>
                <CardDescription className="text-base">Previous Attempt</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  This program is aimed at educating parents of disabled athletes, which is valuable, but it doesn't directly address the child's needs or goals. Kids need their own mentors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2">
              <CardHeader>
                <CardTitle className="text-xl">State Emerging Talent Programs</CardTitle>
                <CardDescription className="text-base">Previous Attempt</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  States and territories run emerging talent mentorship programs, but these don't address kids who haven't chosen their sport yet. We help athletes at the exploration stage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  The Buddy System Difference
                </CardTitle>
                <CardDescription className="text-base font-semibold">Our Unique Approach</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium leading-relaxed">
                  We focus specifically on primary school aged athletes (8-14 years), provide direct child-to-athlete mentorship, and support kids regardless of whether they've chosen their sport. We're filling the gap that others have missed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get Involved</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Whether you're a young athlete looking for guidance, an experienced para athlete ready to mentor, or someone who wants to support our mission, there's a place for you in The Buddy System.
            </p>
                       <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle>Young Athletes</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    Join our program and connect with a mentor who understands your journey.
                  </p>
                  <Link href="/sign-up" className="w-full">
                    <Button className="w-full" variant="white">Sign Up</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle>Become a Mentor</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    Share your experience and inspire the next generation of para athletes.
                  </p>
                  <Link href="/sign-up" className="w-full">
                    <Button className="w-full" variant="white">Apply Now</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle>Support Us</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    Help us expand our reach and support more young athletes.
                  </p>
                  <Link href="/sign-up" className="w-full">
                    <Button className="w-full" variant="white">Donate</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/action.jpg" 
                alt="Athletes in action" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
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
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</Link>
                <Link href="/problem" className="block text-muted-foreground hover:text-primary transition-colors">The Problem</Link>
                <Link href="/our-mission" className="block text-muted-foreground hover:text-primary transition-colors">Our Mission</Link>
                <Link href="/impact" className="block text-muted-foreground hover:text-primary transition-colors">Impact</Link>
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
