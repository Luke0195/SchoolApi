class HomeController {
  store(request, response) {
    return response.json({ mesasge: 'Projeto escola' });
  }
}

export default new HomeController();
