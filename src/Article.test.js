import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Article from './components/article';
Enzyme.configure({ adapter: new Adapter() });

describe("article contains correct data", () => {

  test("the article contains correct title", () => {
    const articleWrapper = mount(<Article article={mockArticle}/>);

    expect(articleWrapper.find(".article-container").text()).toContain("Title: "+mockArticle.title);
  })

  test("the article contains correct likes", () => {
    const articleWrapper = mount(<Article article={mockArticle}/>);

    expect(articleWrapper.find(".article-container").text()).toContain("Likes: "+mockArticle.reactions.likes);
  })

  test("the article contains correct location", () => {
    const articleWrapper = mount(<Article article={mockArticle}/>);

    expect(articleWrapper.find(".article-container").text()).toContain("Location: "+mockArticle.location.town);
  })

  test("the article contains correct description", () => {
    const article = mount(<Article article={mockArticle}/>);

    expect(article.find(".article-container").text()).toContain("Collection Notes: "+mockArticle.collection_notes);
  })

  test("the article contains correct description", () => {
    const articleWrapper = mount(<Article article={mockArticle}/>);

    expect(articleWrapper.find(".article-container").text()).toContain("Description: "+mockArticle.description);
  })

})

let mockArticle =
  {
    "id": 1121841,
    "title": "Triple Spotlight fitting... ",
    "description": "Chromed triple spotlight fitting suitable for LED bulbs only used for a few weeks now excess to requirements.",
    "donation_description": "",
    "collection": {
      "id": 0
    },
    "section": "product",
    "location": {
      "latitude": 51.6533,
      "longitude": -0.4099,
      "distance": 25.4,
      "town": "Watford",
      "country": "United Kingdom"
    },
    "collection_notes": "I can leave outside",
    "value": {
      "price": 0,
      "currency": "EUR",
      "payment_type": "no_payment_type"
    },
    "created_at": "2020-07-19T10:25:37.000Z",
    "updated_at": "2020-07-19T10:25:37.000Z",
    "status": "active",
    "expiry": "2020-10-26T10:25:37.000Z",
    "reactions": {
      "likes": 0,
      "by_user": false,
      "views": 16
    },
    "is_owner": false,
    "conversations": {
      "linked": 0,
      "request_id": null
    },
    "photos": [
      {
        "uid": "MdwEkyucc3NjY72e0q8VFw",
        "files": {
          "original": "https://cdn.olioex.com/uploads/photo/file/MdwEkyucc3NjY72e0q8VFw/image.jpg",
          "large": "https://cdn.olioex.com/uploads/photo/file/MdwEkyucc3NjY72e0q8VFw/large_image.jpg",
          "medium": "https://cdn.olioex.com/uploads/photo/file/MdwEkyucc3NjY72e0q8VFw/medium_image.jpg",
          "small": "https://cdn.olioex.com/uploads/photo/file/MdwEkyucc3NjY72e0q8VFw/small_image.jpg"
        },
        "dimensions": {
          "width": 1280,
          "height": 622
        }
      }
    ],
    "images": [
      {
        "uid": "MdwEkyucc3NjY72e0q8VFw",
        "files": {
          "original": "https://cdn.olioex.com/uploads/photo/file/MdwEkyucc3NjY72e0q8VFw/image.jpg",
          "large": "https://cdn.olioex.com/uploads/photo/file/MdwEkyucc3NjY72e0q8VFw/large_image.jpg",
          "medium": "https://cdn.olioex.com/uploads/photo/file/MdwEkyucc3NjY72e0q8VFw/medium_image.jpg",
          "small": "https://cdn.olioex.com/uploads/photo/file/MdwEkyucc3NjY72e0q8VFw/small_image.jpg"
        },
        "dimensions": {
          "width": 1280,
          "height": 622
        }
      }
    ],
    "user": {
      "id": 535870,
      "first_name": "Sean",
      "current_avatar": {
        "original": "https://cdn.olioex.com/uploads/avatar/file/DYRy2Jyda96LXWs3XRFnTw/image.jpg",
        "large": "https://cdn.olioex.com/uploads/avatar/file/DYRy2Jyda96LXWs3XRFnTw/large_image.jpg",
        "small": "https://cdn.olioex.com/uploads/avatar/file/DYRy2Jyda96LXWs3XRFnTw/small_image.jpg"
      },
      "roles": [
        "Consumer"
      ],
      "location": {
        "latitude": 51.6537,
        "longitude": -0.4093
      },
      "rating": {
        "rating": null,
        "number": 0
      },
      "verifications": [
        {
          "method": "sms"
        },
        {
          "method": "facebook"
        }
      ]
    },
    "dropbox": {},
    "first": false,
    "last_listed": "2020-07-19T10:25:37.000Z"
  }