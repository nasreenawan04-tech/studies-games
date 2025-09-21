import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, Mail, Clock, HelpCircle, Check } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - get from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is properly configured
      if (!serviceId || !templateId || !publicKey) {
        toast({
          title: "Configuration Error",
          description: "Email service is not properly configured. Please contact us directly at support@dapsigames.com",
          variant: "destructive"
        });
        return;
      }

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message! We'll get back to you within 24 hours.",
        variant: "default"
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: "Sorry, there was an error sending your message. Please try again or contact us directly at support@dapsigames.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch with DapsiGames</title>
        <meta name="description" content="Contact DapsiGames for support, feedback, or suggestions. We're here to help you make the most of our free educational games." />
        <meta name="keywords" content="contact dapsigames, support, feedback, suggestions, help" />
        <meta property="og:title" content="Contact Us - Get in Touch with DapsiGames" />
        <meta property="og:description" content="Contact DapsiGames for support, feedback, or suggestions. We're here to help you make the most of our free educational games." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="min-h-screen flex flex-col" data-testid="page-contact-us">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-yellow-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-5xl lg:text-6xl font-bold text-neutral-800 mb-6" data-testid="text-page-title">
                  Contact <span className="text-blue-600">DapsiGames</span>
                </h1>
                <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                  We'd love to hear from you. Send us a message about our educational games and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="feature">Feature Request</option>
                        <option value="bug">Bug Report</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={16} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={16} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-neutral-800 mb-6">Get in touch</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <Mail className="text-blue-600" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-800">Email</h3>
                          <p className="text-neutral-600" data-testid="text-contact-email">support@dapsigames.com</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                          <Clock className="text-yellow-600" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-800">Response Time</h3>
                          <p className="text-neutral-600">Usually within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <HelpCircle className="text-blue-600" size={20} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-800">Quick Help</h3>
                          <p className="text-neutral-600">
                            <a href="/help" className="text-blue-600 hover:underline">
                              Check our Help Center
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-neutral-800 mb-4">We're here to help!</h3>
                    <p className="text-neutral-600 mb-4">
                      Whether you have a question, need technical support, or want to suggest a new educational game, 
                      we're always happy to hear from you.
                    </p>
                    <ul className="text-sm text-neutral-600 space-y-2">
                      <li className="flex items-center">
                        <Check className="text-blue-500 mr-2" size={16} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                        24-hour response time
                      </li>
                      <li className="flex items-center">
                        <Check className="text-blue-500 mr-2" size={16} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                        Friendly support team
                      </li>
                      <li className="flex items-center">
                        <Check className="text-blue-500 mr-2" size={16} aria-hidden="true" style={{ pointerEvents: 'none' }} />
                        We value your feedback
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;