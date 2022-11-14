// edit contain 1

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const project = document.querySelector('#project')
const small = document.querySelector('#small')

// edit contain 2
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectContent = document.querySelector('#project-content')
const smallContent = document.querySelector('#small-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    //modal: true,
    width: '500px',
    height: '600px',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '500px',
    height: '600px',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})





