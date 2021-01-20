class PhotoController {
  store(request, response) {
    console.log(request.file);
    return response.json('Ok');
  }
}

export default new PhotoController();
