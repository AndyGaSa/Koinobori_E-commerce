const Article = require('../models/articleModel');
const controller = require('./articlesController');

jest.mock('../models/articleModel');

describe('Given a CreatArticle controller', () => {
  describe('when is trigered', () => {
    const res = {
      send: jest.fn(),
      status: jest.fn(),
      json: jest.fn()
    };
    const req = { body: { newArticle: ' ' } };

    test('then call sent', async () => {
      Article.create.mockResolvedValue({ });
      await controller.createArticle(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('then call rejected', async () => {
      Article.create.mockRejectedValue({ });
      await controller.createArticle(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('Given a DeleteArticle controller', () => {
  describe('when is trigered', () => {
    const res = {
      send: jest.fn(),
      status: jest.fn()
    };
    const req = { params: { Article: ' ' } };

    test('then call sent', async () => {
      Article.findByIdAndDelete.mockResolvedValue();
      await controller.deleteArticle(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('then call rejected', async () => {
      Article.findByIdAndDelete.mockRejectedValue();
      await controller.deleteArticle(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('Given a getAllArticles controller', () => {
  describe('when is trigered', () => {
    const res = {
      send: jest.fn(),
      status: jest.fn(),
      json: jest.fn()
    };
    const req = { query: ' ' };
    test('then call sent', async () => {
      Article.find.mockResolvedValue({ });
      await controller.getAllArticles(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('then call rejected', async () => {
      Article.find.mockRejectedValue({ });
      await controller.getAllArticles(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('Given a getAllArticles controller', () => {
  describe('when is trigered', () => {
    const res = {
      send: jest.fn(),
      status: jest.fn(),
      json: jest.fn()
    };
    const req = { params: { article: ' ' } };
    test('then call sent', async () => {
      Article.findById.mockResolvedValue();
      await controller.getArticleById(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('then call rejected', async () => {
      Article.findById.mockRejectedValue();
      await controller.getArticleById(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
describe('Given a getAllArticles controller', () => {
  describe('then call sent', () => {
    const res = {
      send: jest.fn(),
      status: jest.fn(),
      json: jest.fn()
    };
    const req = { params: { article: ' ', body: ' ' } };
    test('then call sent', async () => {
      Article.findByIdAndUpdate.mockResolvedValue();
      await controller.updateArticle(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('then call rejected', async () => {
      Article.findByIdAndUpdate.mockRejectedValue();
      await controller.updateArticle(req, res);
      expect(res.status).toHaveBeenCalledWith(501);
    });
  });
});
