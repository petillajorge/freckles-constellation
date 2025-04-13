import Image from "next/image"
import Link from "next/link"
import { Upload, Camera, Star, Users, Sparkles, Check, Instagram, Twitter, Facebook, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">Freckles Constellation</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-orange-500 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log in
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">Sign up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex-col flex ">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 justify-center align-middle flex-wrap">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-orange-900">
                    Discover Your Freckles Twin
                  </h1>
                  <div className="flex justify-center align-middle">
                    <p className="max-w-[600px] text-gray-600 md:text-xl ">
                      Upload your photo and find someone with a matching freckle constellation. Your unique pattern
                      connects you to others in ways you never imagined.
                    </p>
                  </div>
                  
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Try It Now</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="p-6">
                    <Image
                      src="/freckles-constellation-logo.png"
                      width={800}
                      height={800}
                      alt="Freckles matching example"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Demo Section */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                    Main Feature
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-900">
                    See the Magic in Action
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our advanced technology maps your freckles into a unique constellation pattern, then finds your
                    celestial twin with a matching pattern.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Precise freckle detection technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Instant matching with our database</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Personalized constellation story</span>
                  </div>
                </div>
                <Button className="w-fit bg-orange-500 hover:bg-orange-600">Try It Now</Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative overflow-hidden rounded-xl border bg-background p-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <div className="rounded-lg bg-orange-100 p-2 text-center text-sm font-medium text-orange-800">
                        Your Photo
                      </div>
                      <div className="overflow-hidden rounded-lg border">
                        <Image
                          src="/logo-notext.png"
                          width={300}
                          height={300}
                          alt="Your photo"
                          className="aspect-square object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg bg-orange-100 p-2 text-center text-sm font-medium text-orange-800">
                        Your Match
                      </div>
                      <div className="overflow-hidden rounded-lg border">
                        <Image
                          src="/logo-notext.png"
                          width={300}
                          height={300}
                          alt="Matching photo"
                          className="aspect-square object-cover"
                        />
                      </div>
                    </div>
                    <div className="col-span-2 mt-2 rounded-lg border bg-white p-4 text-center text-sm">
                      <p className="font-medium text-orange-800">Your Constellation Story</p>
                      <p className="mt-1 text-gray-600">
                        Your freckles form the "Lyra" pattern, connecting you with Sarah from Boston who shares the same
                        celestial map. Your patterns align with 87% similarity!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-4 py-1 text-sm text-orange-800">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-orange-900">
                  Find Your Freckle Match in 3 Simple Steps
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our advanced algorithm maps your unique freckle pattern and finds your celestial twin.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-900">
                  <Upload className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-orange-900">Upload Your Photo</h3>
                <p className="text-center text-gray-600">
                  Take a clear selfie or upload an existing photo showing your freckles.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-900">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-orange-900">Map Your Constellation</h3>
                <p className="text-center text-gray-600">
                  Our algorithm detects and maps your unique freckle pattern into a constellation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-900">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-orange-900">Find Your Match</h3>
                <p className="text-center text-gray-600">
                  Discover people who share a similar freckle constellation to yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-orange-900">
                  Discover the Universe on Your Skin
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Freckles Constellation offers unique features to help you explore the celestial patterns you share
                  with others.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/logo-notext.png"
                width={300}
                height={300}
                alt="Features illustration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                          <Camera className="h-4 w-4 text-orange-900" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-900">Advanced Detection</h3>
                      </div>
                      <p className="text-gray-600">
                        Our AI precisely identifies and maps even the faintest freckles to create your unique pattern.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                          <Users className="h-4 w-4 text-orange-900" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-900">Global Matching</h3>
                      </div>
                      <p className="text-gray-600">
                        Connect with people worldwide who share your freckle constellation pattern.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                          <Star className="h-4 w-4 text-orange-900" />
                        </div>
                        <h3 className="text-xl font-bold text-orange-900">Personalized Stories</h3>
                      </div>
                      <p className="text-gray-600">
                        Receive a unique narrative about your freckle constellation and its cosmic significance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-orange-900">
                  Celestial Connections
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from people who found their freckle twins and discovered unexpected connections.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-1 text-orange-500">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-gray-600">
                    "I found my freckle twin in another country! We've become great friends and even planned a trip to
                    meet in person. It's amazing how something so small can create such a meaningful connection."
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-1">
                    <div className="h-10 w-10 rounded-full bg-orange-200" >
                    <Image 
                      src="/media/sophie.jpg"
                      width={200}
                      height={200}
                      alt="Sophie"
                      className="h-10 w-10 rounded-full"/>
                    </div>

                  </div>
                  <div>
                    <p className="font-medium text-orange-900">Sophie P.</p>
                    <p className="text-sm text-gray-600">Akimovka, Ukraine</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-1 text-orange-500">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-gray-600">
                    "I've always been self-conscious about my freckles, but this app helped me see them as beautiful
                    constellations. Finding my match gave me a new appreciation for what makes me unique."
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-1">
                  <div className="h-10 w-10 rounded-full bg-orange-200" >
                    <Image 
                      src="/media/jorge.png"
                      width={200}
                      height={200}
                      alt="Jorge"
                      className="h-10 w-10 rounded-full"/>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-orange-900">Jorge F.</p>
                    <p className="text-sm text-gray-600">Valencia, Spain</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-1 text-orange-500">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-gray-600">
                    "Tali, tali, Tutu"
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="rounded-full bg-orange-100 p-1">
                  <div className="h-10 w-10 rounded-full bg-orange-200" >
                    <Image 
                      src="/media/tutu.jpg"
                      width={200}
                      height={200}
                      alt="Jorge"
                      className="h-10 w-10 rounded-full"/>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-orange-900">Tutu</p>
                    <p className="text-sm text-gray-600">Cat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-orange-900">
                  Choose Your Cosmic Journey
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Select the plan that best fits your celestial exploration needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-orange-900">Stargazer</h3>
                  <p className="text-gray-600">For casual explorers</p>
                </div>
                <div className="mt-4 flex items-baseline text-orange-900">
                  <span className="text-4xl font-bold">Free</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">1 freckle match per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Basic constellation story</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Standard detection accuracy</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-orange-500 hover:bg-orange-600">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border-2 border-orange-500 bg-white p-6 shadow-lg">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-orange-900">Constellation</h3>
                  <p className="text-gray-600">For dedicated pattern seekers</p>
                </div>
                <div className="mt-4 flex items-baseline text-orange-900">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="ml-1 text-gray-600">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Unlimited freckle matches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Detailed constellation stories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">High detection accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Message your matches</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-orange-500 hover:bg-orange-600">Subscribe Now</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-orange-900">Cosmic</h3>
                  <p className="text-gray-600">For serious constellation enthusiasts</p>
                </div>
                <div className="mt-4 flex items-baseline text-orange-900">
                  <span className="text-4xl font-bold">$19.99</span>
                  <span className="ml-1 text-gray-600">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">All Constellation features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Premium constellation stories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Highest detection accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Video chat with matches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Priority customer support</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-orange-500 hover:bg-orange-600">Go Cosmic</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Discover Your Celestial Twin?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of others who have found their freckle constellation matches and started amazing
                  connections.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-orange-500 hover:bg-orange-50">Get Started Now</Button>
                <Button variant="outline" className="border-white text-white hover:bg-orange-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">Freckles Constellation</span>
              </div>
              <p className="text-sm text-gray-600">
                Discover the universe on your skin and connect with your celestial twins.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-orange-500">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#features" className="hover:text-orange-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-orange-500">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-orange-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Data Protection
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Freckles Constellation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

