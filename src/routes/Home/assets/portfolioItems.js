let env = process.env.NODE_ENV || 'development'

export function getURL (url) {
  return env === 'production' ? './dist/' + url : url
}

export default [
  {
    title: 'Cooking School',
    subtitle: 'Wolfgang Puck',
    image: getURL('wolfgang.jpg'),
    technology: ['js', 'css3'],
    desc: 'A website for Wolfgang Puck that displays videos and information about his Online Cooking School.',
    link: 'https://www.wolfgangpuckcookingschool.com/'
  },
  {
    title: 'React Launch Line',
    subtitle: 'Open Source',
    image: getURL('linechart.png'),
    technology: ['js', 'react'],
    desc: 'An open source React Line Chart component inspired by SpaceX.',
    link: 'https://michaellyons.github.io/react-launch-line/'
  },
  {
    title: 'React Launch Bar',
    subtitle: 'Open Source',
    image: getURL('bars.png'),
    technology: ['js', 'react'],
    desc: 'An open source React Bar Chart component inspired by SpaceX.',
    link: 'https://michaellyons.github.io/react-launch-bar/'
  },
  {
    title: 'React Launch Gauge',
    subtitle: 'Open Source',
    image: getURL('gauges.png'),
    technology: ['js', 'react'],
    desc: 'An open source React Circular Gauge component inspired by SpaceX\'s launch display.',
    link: 'https://michaellyons.github.io/react-launch-gauge/'
  },
  {
    title: 'React Launch Progress',
    subtitle: 'Open Source',
    image: getURL('launch.png'),
    technology: ['js', 'react'],
    desc: 'An open source React component inspired by SpaceX\'s launch display.',
    link: 'https://michaellyons.github.io/react-launch-progress/'
  },
  {
    title: 'Welding Warehouse',
    subtitle: 'Welding Warehouse Inc',
    image: getURL('welder.png'),
    technology: ['js', 'php'],
    desc: 'A catalogue website for a welding supply company.',
    link: 'https://www.weldingwarehouseinc.com/'
  },
  {
    title: 'React Amazon Gallery',
    subtitle: 'Open Source',
    image: getURL('gallery.png'),
    technology: ['js', 'react'],
    desc: 'An open source React component inspired by Amazon\'s simple product display.',
    link: 'http://rag.js.org/'
  },
  {
    title: 'Pick A Color',
    subtitle: 'CSS Fun (2/2)',
    technology: ['css3'],
    image: getURL('pickacolor.png'),
    desc: 'The second of simple CSS experiments. This is a better color-picker display than the HTML default.',
    link: 'https://codepen.io/mlyons/pen/dWvPpW'
  },
  {
    title: 'Loading Rings',
    subtitle: 'CSS Fun (1/2)',
    technology: ['css3'],
    image: getURL('css_rings.png'),
    desc: 'The first of simple CSS experiments. This is an attempt at a loading spinner.',
    link: 'https://codepen.io/mlyons/pen/JNWPbL'
  },
  {
    title: 'Innovation 720',
    subtitle: 'Innovation 720',
    technology: ['js', 'php'],
    image: getURL('innovation720.png'),
    link: 'https://www.innovation720.com/'
  }
]
