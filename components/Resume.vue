<template>
  <section id="wrapper">
    <div class="container-fluid">
      <section id="about" class="min-h-screen md:px-10 flex pt-20 md:py-10">
        <div class="self-center flex-1 ">
          <h1 class="font-bold text-gray-800 text-6xl leading-none">
            MANUEL
            <span class="font-bold text-secondary-400">OBREGOZO</span>
          </h1>
          <h3 class="font-bold text-gray-600 mb-2 text-2xl">
            FRONT END DEVELOPER ·
            <a class="font-bold text-primary-500" href="mailto:email">
              OBREGOZO.MANUEL@GMAIL.COM
            </a>
          </h3>
          <div class="font-bold mb-3 text-gray-500">
            <i class="fas fa-map-marker-alt"></i> AMSTERDAM, NETHERLANDS
          </div>
          <p class="mb-2 mt-8 text-gray-600 font-semibold text-justify">
            I am an enthusiastic Front End Developer from a little town called
            Necochea in the coast of Argentina. Passionate about software
            development and developer communities.
          </p>
          <p class="mb-2 text-gray-600 font-semibold text-justify">
            Currently, I am centered on web, desktop, and hybrid mobile
            applications, using different JavaScript related Frameworks. I have
            worked as a developer for more than 8 years, in different kinds of
            business domains, across a variety of platforms. I executed and
            contributed to full-stack development projects from design to
            testing and up to production deployment, with an emphasis on front
            end features.
          </p>
          <p class="text-gray-600 font-semibold text-justify">
            I consider myself a real team player who understands the importance
            of teamwork, proactivity, collaboration, continuous feedback, and
            open communication.
          </p>
          <div class="mt-10">
            <a
              target="blank"
              class="mr-4 text-gray-600 hover:text-gray-500"
              href="https://www.linkedin.com/in/manuelobregozo/?locale=en_US"
            >
              <span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a
              target="blank"
              class="mr-4 text-gray-600 hover:text-gray-500"
              href="https://github.com/mobregozo"
            >
              <span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-github-alt fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a
              target="blank"
              class="mr-4 text-gray-600 hover:text-gray-500"
              href="https://stackoverflow.com/users/6098430/manuel-obregozo"
            >
              <span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-stack-overflow fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section
        id="experience"
        class="min-h-screen md:px-10 flex pt-20 md:py-10"
      >
        <div class="my-auto">
          <h1 class="mb-5 text-6xl font-bold leading-none">Experience</h1>
          <p class="text-gray-600 font-semibold text-justify">
            I have worked as a Developer since 2011, I started as a
            consultant/back end developer, and due to the fact that I always
            liked UI/UX related topics, I did a switch to front end in 2013 when
            I started my first assigment. And since then, I have been exploring
            different technologies, and I still enjoy the challenges it brings.
          </p>

          <div class="flex flex-no-wrap flex-col md:flex-row mb-5 py-5">
            <div class="mr-auto">
              <div class="mb-3 font-bold text-xl text-gray-600">
                Side Projects
              </div>
              <p class="text-gray-600 text-justify">
                Since I started to work with front end technologies I work in
                different side-projects outside of my full-time assigments. In
                most of the cases, the products that I developed are for small
                local business, and with learning and testing purposes about a
                particular technology that I like to learn. Mainly about
                different Javascript frameworks/libraries such as React, Svelte,
                VueJs, Angular, Stencil, Ionic, among others.
              </p>
            </div>
          </div>

          <div
            v-for="job in experiences"
            v-bind:key="job.companyName"
            class="flex flex-no-wrap flex-col md:flex-row border-solid border-t-2 border-gray-200 py-10"
          >
            <div class="mr-auto">
              <div class="md:flex items-center md:justify-between">
                <h3
                  class="m-0 font-bold text-gray-700 text-3xl leading-none text-secondary-400"
                >
                  {{ job.role }}
                </h3>
                <div class="text-primary-500 font-bold whitespace-no-wrap">
                  {{ job.period }}
                </div>
              </div>
              <div class="mb-3 mt-1 text-lg text-gray-600">
                at <span class="font-bold">{{ job.companyName }} </span>-
                {{ job.location }}
              </div>
              <p class="mt-4 mb-4 text-gray-600 font-semibold text-justify">
                {{ job.description }}
              </p>
              <div class="mt-5 font-bold text-xl text-gray-600">Projects</div>
              <div
                v-for="project in job.projects"
                :key="project.description"
                class="mt-3 mb-8 last-child:mb-0"
              >
                <p class="text-gray-600 text-justify">
                  {{ project.description }}
                </p>
                <div class="mt-2 text-gray-600">
                  <div class="font-semibold">Main Technologies</div>
                  <p>
                    {{ project.technologies }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="interests"
        class="min-h-screen w-sceen md:px-10 flex pt-20 md:py-10"
      >
        <div class="my-auto">
          <h2 class="mb-5 text-6xl font-bold leading-none">Interests</h2>
          <p class="mb-2 mt-8 text-gray-600 font-semibold">
            Besides work, I usually spend my free time outdoors playing sports
            and travelling around, taking pictures of everything I see.
          </p>
          <p class="mb-2 mt-4 text-gray-600 font-semibold">
            Related to sports I am passionate about football, love to read and
            talk about it, and of course play as much as I can.
          </p>
          <p class="mb-2 mt-4 text-gray-600 font-semibold">
            When I am not running outside, I am behind my drums, instrument that
            I play since I was a little kid, and I still enjoy playing the good
            old punk rock songs that I used to listen to when I was at high
            school.
          </p>
          <div class="mt-10 flex flex-wrap items-center justify-around">
            <img
              class="flex-none my-5"
              src="https://via.placeholder.com/400x300.png"
            />
            <img
              class="flex-none my-5"
              src="https://via.placeholder.com/400x300.png"
            />
            <img
              class="flex-none my-5"
              src="https://via.placeholder.com/400x300.png"
            />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      isActive: false,
      menuActive: 'ABOUT',
      experiences: [
        {
          companyName: 'FRONTMEN',
          location: 'Amsterdam, The Netherlands',
          role: 'Front End Developer',
          period: 'SINCE FEB 2018',
          description: ``,
          projects: [
            {
              technologies: `JavaScript, AngularJs, Angular, Ionic, Stencil and Redux.`,
              description: `I have worked at Rabobank, one of the main banks in The
                Netherlands, as a Senior Front End Developer. I was part of the
                front end platform team, helping to deliver the new development
                ecosystem that is now used across the entire organization. In
                this regard I have been actively involved in the decision-making
                when selecting, migrating, introducing and implementing a new
                monorepo set-up (to enhance collaboration, code reachability,
                coordinated deployments & versioning amongst others) along with
                the new upcoming design of the different apps.`
            }
          ]
        },
        {
          companyName: 'MOBIQUITY',
          location: 'Amsterdam, The Netherlands',
          role: 'Front End Developer',
          period: 'JUN 2017 - JAN 2018',
          description: `Within Mobiquity I worked as a Front End Developer for different
                business domains. Gained a lot of experience working in an
                international environment, and interview recruiting process.`,
          projects: [
            {
              technologies: `AngularJs, Angular, Protractor and Jasmine.`,
              description: `Worked at Backbase, an online banking platform, as a Front End
                consultant for professional services, developing and helping the
                team to integrate and implement the UI (Web Apps and Hybrid
                Mobile Apps) of the company products with the different Bank
                cores systems.`
            },
            {
              technologies: `Angular and Ionic`,
              description: `Worked as a Web Developer for an e-commerce hybrid Mobile
                Application called The Children's Place, based on the Us.`
            }
          ]
        },
        {
          companyName: 'NORSYNC',
          location: 'Tandil, Argentina',
          role: 'Front End Developer',
          period: 'JAN 2016 - MAY 2017',
          description: `At Norsync were we worked in a startup model, I was really
                involved in all the phases of the development cycle of the
                projects. I also gained experience in other areas such as design
                and marketing.`,
          projects: [
            {
              technologies: `AngularJs, Angular, Ionic, NodeJs, Protractor, Jasmine,
                Bootstrap and Gulp.`,
              description: `Worked as a Web and Mobile Front End Developer, where I
                developed several hybrid applications and web apps from scratch
                that are now still in production, including Application
                distribution into the different stores. Regarding the business
                domain, the applications were Booking systems, Ticket systems
                and Live feed events applications, among others. These apps were
                implemented in stores succh as restaurants, sports clubs, bars
                and shoppings.`
            }
          ]
        },
        {
          companyName: 'SPARK DIGITAL (former DevSpark )',
          location: 'Tandil, Argentina',
          role: 'Software Engineer',
          period: 'Apr 2014 – Dec 2015',
          description: `Within Devspark I did my first official step into Front End
                development, something that I was already doing in my free time.
                I also gained experience in integration strategies, management,
                and team building. I had direct contact with many stakeholders
                from several backgrounds and their clients.`,
          projects: [
            {
              technologies: `Django, Heroku, AngularJs, JQuery, Protractor, jasmine, SASS,
                CSS, Bootstrap, and Grunt.`,
              description: `I have lead a front end development of a SPA. A private online
                social media, which allows users to share and support private
                and emotional conversations. Since we were a small team, I was
                involved in all technical and non-technical discussions related
                to the end product, and also was able to refactor the
                Application to improve several aspects that were missing at the
                moment that we took over it.`
            },
            {
              technologies: `APIGee products, JavaScript, RESTful, Jmeter and SoapUI.`,
              description: `Worked as an APIgee 4G developer, which is a cloud-based
                platform for APIs. My duties were the design and development of
                RESTful APIs into Apigee Platform. In order to expose automatic
                digital supply chain services to increase the platform’s
                integration capabilities with third-party applications.
                Application’s issue diagnostics and resolution, deployment
                management and customer service orientation.`
            }
          ]
        },
        {
          companyName: 'Grupo Assa',
          location: 'Tandil, Argentina',
          role: 'Technical Consultant',
          period: 'NOV 2011 - NOV 2012',
          description: ` Gained experience in office environment, customer care, and
                working with distributed remote teams.`,
          projects: [
            {
              technologies: `JD Edwards, Oracle SQL, ERP technologies related and C/C++.`,
              description: `Worked as a JD Edwards developer, an Enterprise Resource
                Planning. My responsibilities included business process
                optimization, in order to improve our client’s business
                activities such as sales, deliveries, payments, production,
                inventory, and administration quality. Review code for quality
                and adherence to standards. And, apply and analyze business
                requests to determine how best to create successful resolution.`
            }
          ]
        }
      ]
    }
  }
}
</script>
