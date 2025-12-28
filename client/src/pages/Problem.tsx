import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { AlertCircle, TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function Problem() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/hero-image.jpg" 
            alt="Young disabled athlete" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              The Problem We're Solving
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Understanding the barriers disabled young athletes face is the first step toward creating meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Core Problems */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <AlertCircle className="h-8 w-8 text-primary" />
                  Lack of Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-card-foreground leading-relaxed mb-4">
                  Young disabled athletes are uneducated on their pathway to success. Primary school aged kids desperately need guidance on how to pursue para sport, but this information and support is often unavailable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Without proper guidance, young athletes struggle to understand what opportunities exist, how to develop their skills, and what their future in para sport could look like.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                  Harder to Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-card-foreground leading-relaxed mb-4">
                  Due to their disability, it is significantly harder for disabled athletes to progress compared to able-bodied athletes. They face unique challenges that require specialized support and understanding.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Without proper mentorship and support, these barriers become insurmountable, and many young athletes give up before they even begin.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-8 w-8 text-accent" />
                  No Role Models
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-card-foreground leading-relaxed mb-4">
                  There is no inclusion in able-bodied sport, no current information on para sport programs, and critically, no role models in para sport for young disabled athletes to look up to.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Without visible role models who share their experiences, young athletes struggle to envision their own future in athletics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  Limited Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-card-foreground leading-relaxed mb-4">
                  75% of Australians who have a physical impairment who want to pursue sport don't, due to lack of knowledge, availability, and funding (according to Paralympics Australia).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The information gap is a critical barrier that prevents many talented young athletes from ever discovering their potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">The Scale of the Issue</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-primary/20">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">11%</div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Children with Disabilities in Australia
              </h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                In 2022, 11.0% of Australian children aged 0-14 years were identified as having a disability (Australian Bureau of Statistics).
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                This represents hundreds of thousands of young Australians who could benefit from para sport opportunities and mentorship.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-accent/20">
              <div className="text-6xl md:text-7xl font-bold text-accent mb-4">75%</div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Don't Pursue Sport Due to Barriers
              </h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                75% of Australians with physical impairment who want to pursue sport don't, due to lack of knowledge, availability, and funding (Paralympics Australia).
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                This staggering statistic shows how many young athletes are losing out on opportunities due to preventable barriers.
              </p>
            </div>
          </div>

          <div className="bg-destructive/10 border-2 border-destructive rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Why This Matters</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  This issue is critical if we want to have a world with disability diversity. When 75% of young disabled athletes who want to participate in sport are prevented from doing so, we lose incredible talent, potential, and the opportunity to create a more inclusive sporting culture. The barriers are not insurmountable—they require targeted support, mentorship, and access to information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barriers Breakdown */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Key Barriers to Para Sport Participation</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Knowledge Gap</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Young disabled athletes and their families often don't know what para sports exist, how to get started, or what pathways are available. This information gap is a critical first barrier.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary/10 to-transparent rounded-xl p-8 border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Lack of Accessibility</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Even when programs exist, they may not be accessible or adapted for young athletes with specific disabilities. Accessibility goes beyond physical access to include communication, support, and understanding.
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-xl p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Financial Barriers</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Adaptive equipment, specialized coaching, and program fees can be prohibitively expensive for families. Without funding support, many talented young athletes cannot participate.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Absence of Mentorship</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Young disabled athletes lack mentors who understand their specific challenges and can guide them through their para sport journey. This absence of role models is deeply discouraging.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary/10 to-transparent rounded-xl p-8 border-l-4 border-secondary">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Social Isolation</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Without inclusive communities and peer support, young disabled athletes may feel isolated and unsupported in their athletic pursuits, leading many to abandon their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why The Buddy System Matters */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Why The Buddy System Matters</h2>
            
            <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/20 shadow-lg">
              <p className="text-xl text-card-foreground leading-relaxed mb-6">
                The barriers facing young disabled athletes are real and significant, but they are not insurmountable. What these young athletes need is what many able-bodied athletes take for granted: access to information, mentorship from experienced athletes, and a supportive community.
              </p>
              
              <p className="text-xl text-card-foreground leading-relaxed mb-6">
                The Buddy System addresses these barriers directly by providing:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl">✓</span>
                  <span className="text-lg text-card-foreground leading-relaxed">
                    <strong>Direct mentorship</strong> from experienced disabled athletes who understand the unique challenges young athletes face
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl">✓</span>
                  <span className="text-lg text-card-foreground leading-relaxed">
                    <strong>Accessible information</strong> about para sports, training, and pathways tailored for young athletes
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl">✓</span>
                  <span className="text-lg text-card-foreground leading-relaxed">
                    <strong>Visible role models</strong> who show young athletes what's possible and inspire them to pursue their dreams
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-2xl">✓</span>
                  <span className="text-lg text-card-foreground leading-relaxed">
                    <strong>Community support</strong> that reduces isolation and creates belonging
                  </span>
                </li>
              </ul>

              <p className="text-xl text-card-foreground leading-relaxed font-semibold">
                By addressing these barriers, The Buddy System unlocks the potential of hundreds of young disabled athletes who would otherwise never discover their passion for para sport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Help Us Make a Difference</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Together, we can break down these barriers and create a future where every young disabled athlete has the support they need to succeed.
          </p>
          <Button size="lg" className="text-lg px-8">
            Get Involved <ArrowRight className="ml-2 h-5 w-5" />
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
