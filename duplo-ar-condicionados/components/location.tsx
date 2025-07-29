export function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">Nossa Localização</h2>
          <p className="text-lg text-gray-600">Atendemos Goiânia e região metropolitana</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61983.23!2d-49.2532691!3d-16.6868912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6bd58d80867%3A0x6d3bb7d5b8b8b8b8!2sGoi%C3%A2nia%2C%20GO!5e0!3m2!1spt!2sbr!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Duplo Ar-Condicionados"
            />
          </div>

          <div className="mt-8 text-center">
            <div className="bg-primary-light/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Área de Atendimento</h3>
              <p className="text-gray-600">Goiânia e Região Metropolitana</p>
              <p className="text-sm text-gray-500 mt-2">Consulte disponibilidade para outras regiões</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
