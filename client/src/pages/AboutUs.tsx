import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Heart, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function AboutUs() {
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
              About Our Founders
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Meet the passionate team behind The Buddy System and learn about our mission to empower young disabled athletes.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Our Organization</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              The Buddy System is a non-profit organization dedicated to mentoring disabled primary school athletes with older disabled athletes. We were founded by three passionate individuals who recognized a critical gap in support for young disabled athletes pursuing para sports.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our founders came together with a shared vision: to create a supportive community where young disabled athletes have access to mentorship, guidance, and inspiration from athletes who truly understand their journey.
            </p>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Liam Togher */}
            <Card className="border-2 border-primary/20 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-2xl">Liam Togher</CardTitle>
                <p className="text-center text-primary font-semibold mt-2">Co-Founder</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Liam is a competitive swimmer with Cerebral Palsy who is passionate about para sports. Through his athletic journey and interactions with other disabled primary school athletes, he recognized the need for dedicated mentorship and support. This realization inspired him to co-found The Buddy System.
                </p>
              </CardContent>
            </Card>

            {/* Quinn Togher */}
            <Card className="border-2 border-primary/20 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-2xl">Quinn Togher</CardTitle>
                <p className="text-center text-primary font-semibold mt-2">Co-Founder</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Quinn is a strategic thinker who brings vision and leadership to The Buddy System. With a passion for creating inclusive opportunities for disabled athletes, Quinn works to ensure that our program reaches and supports as many young athletes as possible across Australia.
                </p>
              </CardContent>
            </Card>

            {/* Max Deuchar */}
            <Card className="border-2 border-primary/20 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-2xl">Max Deuchar</CardTitle>
                <p className="text-center text-primary font-semibold mt-2">Co-Founder</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Max is dedicated to making a difference in the lives of young disabled athletes. With a deep commitment to inclusivity and equal opportunities, Max plays a vital role in developing and implementing programs that provide meaningful mentorship and support to our participants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">How It All Started</h2>
          
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Inspiration</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                Liam Togher, a competitive swimmer with Cerebral Palsy, has firsthand experience navigating the world of para sports. Through his athletic journey, he met many other disabled primary school athletes who were struggling to find their way in para sports. They lacked guidance, information, and most importantly, they had no role models—no one who truly understood their unique challenges and could mentor them through their journey.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Realisation</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                From these conversations and connections, Liam realized there was a critical gap in support for young disabled athletes. While programs existed for parents and for elite athletes, there was nothing specifically designed to mentor primary school aged disabled children and help them discover their potential in para sports. This gap was the catalyst for creating The Buddy System.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Vision</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                With Quinn Togher and Max Deuchar by his side, Liam set out to create an organization that would connect young disabled athletes with experienced disabled athlete mentors. The Buddy System was born from the belief that every young disabled athlete deserves access to mentorship, guidance, and inspiration from someone who understands their journey. Together, the three founders are committed to making this vision a reality across Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Commitment</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  To Young Athletes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">
                  We are committed to providing every young disabled athlete with access to mentorship, guidance, and support. We believe in your potential and are here to help you discover and pursue your dreams in para sports.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  To Our Mentors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">
                  We are committed to supporting our mentors in their role as guides and role models. Together, we're creating a community of experienced athletes who are dedicated to inspiring the next generation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  To Inclusivity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">
                  We are committed to creating a world where disability diversity is celebrated and every young athlete has equal opportunities to pursue their passion for sport.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  To Our Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">
                  We are committed to building a supportive community where young athletes feel valued, heard, and empowered to achieve their goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a young athlete seeking guidance or an experienced mentor ready to inspire, we'd love to have you join The Buddy System.
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
