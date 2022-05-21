import request from 'superagent'

export async function getImageUrl(file, token) {
  const fileObject = {
    fileName: file.name,
    fileType: file.type,
  }
  const { signedUrl } = await request
    .post('/api/image')
    .set('authorization', `Bearer ${token}`)
    .send(fileObject)
    .then((res) => res.body)

  return request
    .put(signedUrl)
    .send(file)
    .then(() => {
      return signedUrl.split('?')[0]
    })
}