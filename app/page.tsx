import Link from 'next/link'
import Image from 'next/image'
import { FileText, Handshake, Scroll, Monitor, Shield } from 'lucide-react'

export default function Home() {
  const navigationCards = [
    {
      title: 'Terms of Service',
      description: 'Our terms of service agreement outlining the conditions for using our services.',
      href: '/terms-of-service',
      icon: FileText
    },
    {
      title: 'Business Agreement',
      description: 'Agreement to do business with Gallagher - partnership terms and conditions.',
      href: '/business-agreement',
      icon: Handshake
    },
    {
      title: 'Licenses',
      description: 'View our state licenses and regulatory information across different jurisdictions.',
      href: '/licenses',
      icon: Scroll
    },
    {
      title: 'Terms of Use',
      description: 'Terms and conditions for using our website and digital platforms.',
      href: 'https://www.ajg.com/terms-of-use/',
      icon: Monitor,
      external: true
    },
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information.',
      href: 'https://www.ajg.com/global-privacy-notice/',
      icon: Shield,
      external: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/logo.png"
                alt="American Online Benefits Group"
                width={300}
                height={150}
                className="h-24 w-auto max-h-[100px]"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to the Legal Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              American Online Benefits Group is committed to transparency and compliance. 
              Access our legal documents, terms, and policies to understand your rights and our obligations.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Legal Documents & Policies
          </h2>
          <p className="text-lg text-gray-600">
            Select a document below to view our legal terms and policies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navigationCards.map((card) => {
            const IconComponent = card.icon
            const CardContent = (
              <div className="card h-full group-hover:border-primary group-hover:shadow-xl transition-all duration-200">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 flex justify-center">
                  <span className="text-primary font-medium group-hover:text-primary-dark transition-colors">
                    {card.title === 'Terms of Service' ? 'View Terms of Service →' : 
                     card.title === 'Business Agreement' ? 'View Business Agreement →' : 
                     card.title === 'Licenses' ? 'View Licenses →' : 
                     card.title === 'Terms of Use' ? 'View Terms of Use →' : 
                     card.title === 'Privacy Policy' ? 'View Privacy Policy →' : 
                     'View Document →'}
                  </span>
                </div>
              </div>
            )

            return card.external ? (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                {CardContent}
              </a>
            ) : (
              <Link
                key={card.href}
                href={card.href}
                className="group"
              >
                {CardContent}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xs text-gray-500">
              © 2025 American Online Benefits Group, a Gallagher company. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
