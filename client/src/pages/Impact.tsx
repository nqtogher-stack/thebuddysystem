import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { BarChart3, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function Impact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/action.jpg" 
            alt="Athletes in action" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              See how The Buddy System is making a difference in the lives of young disabled athletes across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">By The Numbers</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-primary/20">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">11%</div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Children with Disabilities in Australia
              </h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                In 2022, 11.0% of Australian children aged 0-14 years were identified as having a disability. This represents hundreds of thousands of young Australians who could benefit from our mentorship program.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-accent/20">
              <div className="text-6xl md:text-7xl font-bold text-accent mb-4">75%</div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Don't Pursue Sport Due to Barriers
              </h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                75% of Australians with physical impairment who want to pursue sport don't, due to lack of knowledge, availability, and funding. The Buddy System is working to change this.
              </p>
            </div>
          </div>

          {/* Impact Areas */}
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">How We Create Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Mentorship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We connect young disabled athletes with experienced mentors who provide guidance, support, and inspiration. This one-on-one relationship is transformative.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                  Skill Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Young athletes develop their athletic skills, understanding of para sports, and confidence through structured mentorship and training guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-accent" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We build inclusive communities where young athletes feel supported, valued, and part of something bigger than themselves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Why This Matters</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-card rounded-xl p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Breaking Down Barriers</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                By providing mentorship and information, we help young disabled athletes overcome the knowledge gap that prevents many from pursuing para sports. We make opportunities accessible and achievable.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Creating Role Models</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                Young disabled athletes need to see themselves represented in sports. Our mentors are living proof that disability doesn't limit athletic potential. They inspire the next generation to dream big.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Building Confidence</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                Through mentorship and community support, young athletes develop the confidence to pursue their dreams. They learn that their disability doesn't define their potential—it's just part of their unique journey.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Changing Lives</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                When a young athlete discovers their passion for para sports and finds a mentor who believes in them, it changes their life. They gain confidence, friendships, and a sense of purpose that extends far beyond athletics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Reach</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Australia Wide</h3>
              <p className="text-muted-foreground leading-relaxed">
                We operate across Australia, connecting young disabled athletes with mentors regardless of location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Multiple Sports</h3>
              <p className="text-muted-foreground leading-relaxed">
                We support young athletes interested in various para sports including swimming, basketball, track & field, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Growing Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our community is growing every day as more young athletes and mentors join The Buddy System.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Be Part of Our Impact</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Together, we can create a world where every young disabled athlete has access to mentorship and the opportunity to pursue their dreams.
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="text-lg px-8">
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
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
