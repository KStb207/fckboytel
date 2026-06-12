import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Über uns - FckBoyTel',
  description: 'Erfahre mehr über das FckBoyTel Team und unsere Mission.',
};

export default function UeberUnsPage() {
  const team = [
    {
      name: 'K. Stb',
      role: 'Gründer & CEO',
      bio: 'Visionar mit Leidenschaft für E-Commerce und innovative Produkte. Möchte den Männern einen Leitfaden für ein genussvlles Leben geben. Ein Macher. Ein Fcker.',
      image: '/team/kstb.jpg',
    },
    {
      name: 'Tim Bö.',
      role: 'Co-Founder (Coming Soon)',
      bio: 'Zitat: Auf einem Festival kam ich dem Gründer den entscheindenen Impuls. Ich möchte mit meiner Expertise zum Wachstum beitragen.',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Lina',
      role: 'Operations (Coming Soon)',
      bio: 'Powerfrau - Sie glaubt an unser Ziel wieder mehr Männlichkeit zu verbreiten, bei Fragen wird sie dir wohl helfen und dich solange bequatschen, bis du keon Bock mehr hast.',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Tom',
      role: 'Logistik',
      bio: 'Er ist nicht überzeugt vom Produkt, brauchte ne`n Job, deshalb haben wir den ins Lager gesteckt. Irgendwer muss euren Kram verschicken. Wenn`s schrott ankommt ist er schuld.',
      image: '/team/placeholder.jpg',
    },
    {
      name: 'Team Member',
      role: 'Operations (Coming Soon)',
      bio: 'Wir suchen untalentierte Menschen, die an unserer Vision glauben. Wenn du nix kannst, bist du hier richtig, wir finden deinen Platz. #PlaceToBe',
      image: '/team/placeholder.jpg',
    },
  ];

  const goals = [
    {
      title: 'Qualität',
      description: 'Premium-Produkte für Männer, die keine Kompromisse eingehen. Du weißt schließlich was du willst.',
    },
    {
      title: 'Humor',
      description: 'Wir nehmen uns selbst nicht zu ernst, aber unsere Produkte sehr. Daher lege nicht jedes Wort auf die Goldwaage.',
    },
    {
      title: 'Innovation',
      description: 'Ständig neue Ideen und Produkte für unser Fckboy-Universum. Du hast eine Idee, wir sind offen für Neues!',
    },
    {
      title: 'Mind-Set',
      description: 'Kleine Community, nur ausgewählte Männer bekommen Zugang. Klein aber fein.',
    },
    {
      title: 'Nachhaltigkeit',
      description: 'Hochwertige Materialien, die lange halten und umweltfreundlich sind. Zumindest wird uns das von unserem Reis-Lieferanten bestätigt. Never mind.',
    },
    {
      title: 'Authentizität',
      description: 'Echt, direkt, ohne Bullshit. Das ist FckBoyTel.',
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="relative bg-gray-900 text-white py-32 px-6 text-center overflow-hidden"
          style={{
            backgroundImage: 'url(/images/startseite_hintergrund.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-6xl font-bold mb-6 uppercase" style={{ letterSpacing: '-2px' }}>
              Über uns
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Wir sind FckBoyTel. Eine Marke für Männer mit Plan.
            </p>
          </div>
        </section>

        {/* Company Presentation */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <h2 className="text-4xl font-bold mb-8 text-gray-900 uppercase" style={{ letterSpacing: '-1px' }}>
                  Das Unternehmen
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed font-light">
                  <p>
                    FckBoyTel ist eine moderne Lifestyle-Marke, die sich an Männer richtet, die ihr Leben ernst nehmen – 
                    Vorbereitung ist das halbe Leben. Gegründet mit der Mission, Qualität, Humor und Zuverlässigkeit zu kombinieren.
                  </p>
				  <p>
                    [No Joke] Wir würden gegründet um den Männern halt zu geben in einer Gesellschaft mit schadhaften Feminusmus. 
					Männer kommen zu uns, weil sie die eigene Stärke wieder finden - natürlich mit einer ordentlichen Portion Humor.
                  </p>
                  <p>
                    Unser Kernprodukt: Der FckBoyTel. Gefüllt mit allem, was ein Mann für seine schnelle Freude braucht. 
                    Zahnbürste, Deo, Kondom – und vor allem: immer griffbereit.
                  </p>
                  <p>
                    Wir glauben, dass aus jedem Fckboy ein (Ehe-)Mann werden kann. Vorausgesetzt er findet eine Dame, die sein Leben bereichert und nicht erschwert.
					Wir wissen, für die Richtige wird der Lifestyle zu den Akten gelegt, also keine Sorge Ladies, bereichert einfach sein Leben.
                  </p>
                </div>
              </div>

              {/* Logo */}
              <div className="bg-gray-100 rounded-lg overflow-hidden h-96 flex items-center justify-center p-8">
                <Image
                  src="/images/Logo.png"
                  alt="FckBoyTel Logo"
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="py-20 px-6 text-white" style={{ backgroundColor: '#2F4F4F' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 uppercase" style={{ letterSpacing: '-1px' }}>
              Unsere Ziele
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {goals.map((goal, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-lg border-l-4"
                  style={{ borderColor: '#013220', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">{goal.title}</h3>
                  <p className="text-gray-200 font-light leading-relaxed">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 uppercase" style={{ letterSpacing: '-1px' }}>
              Das Team
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  {/* Image */}
                  <div className="bg-gray-200 h-64 flex items-center justify-center overflow-hidden">
                    {member.image && member.image !== '/team/placeholder.jpg' ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-gray-400">
                        <div className="text-5xl mb-2">👤</div>
                        <p className="text-sm">Kein Bild</p>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 uppercase" style={{ letterSpacing: '-0.5px' }}>
                      {member.name}
                    </h3>
                    <div
                      className="text-sm font-bold text-white mb-4 px-3 py-1 rounded inline-block"
                      style={{ backgroundColor: '#013220' }}
                    >
                      {member.role}
                    </div>
                    <p className="text-gray-600 font-light">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 uppercase">
              Du willst Teil des Teams sein?
            </h2>
            <p className="text-gray-700 mb-8 font-light text-lg">
              Wir suchen talentierte Menschen, die an unserer Vision glauben. 
              Schreib uns eine Nachricht!
            </p>
            <a href="mailto:info@fckboytel.de">
              <button
                className="px-10 py-4 font-bold text-white hover:opacity-90 transition uppercase tracking-widest"
                style={{ backgroundColor: '#013220' }}
              >
                Bewerbung einreichen
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}