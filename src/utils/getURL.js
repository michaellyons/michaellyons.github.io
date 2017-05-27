let env = process.env.NODE_ENV || 'development'

export default function getURL (url) {
  return env === 'production' ? './dist/' + url : url
}
