const mockData = {
  byId: {
    6166779: {
      type: "YES_NO",
      formData: {
        question: "Do you have your own vehicle?",
        sub_question: "Do you have a driver's license?",
      },
      errorFormData: {
        question: "",
        sub_question: "",
      },
      hiddenFields: {
        sub_question: false,
      },
    },
    7208837: {
      type: "MCQ",
      formData: {
        question: "Select Companies you’ve worked with before",
        options: ["Indiamart", "Alibaba", "Blackbuck"],
        preferred_options: ["Indiamart", "Blackbuck"],
      },
      errorFormData: {
        question: "",
        options: "",
        preferred_options: "",
      },
      hiddenFields: {},
    },
    8442292: {
      type: "FREE_TEXT",
      formData: {
        question: "Tell us about your previous role breifly",
      },
      errorFormData: {
        question: "",
      },
      hiddenFields: {},
    },
    9198647: {
      type: "IMAGE_BASED",
      formData: {
        image_url:
          "blob:http://localhost:3000/f2af12fe-3f7c-40d9-a9bb-18eab802b33a",
        image_description:
          "Take a look at this picture carefully and spot the errors",
        question: "How many errors did you spot?",
      },
      errorFormData: {
        image_url: "",
        image_description: "",
        question: "",
      },
      hiddenFields: {},
    },
  },
  allIds: [7208837, 8442292, 6166779, 9198647],
};

export default mockData

export const previewMockData = [
  {
      "id": "6166779",
      "type": "YES_NO",
      "question": "Do you have your own vehicle?",
      "sub_question": "Do you have a driver's license?"
  },
  {
      "id": "7208837",
      "type": "MCQ",
      "question": "Select Companies you’ve worked with before",
      "options": [
          "Indiamart",
          "Alibaba",
          "Blackbuck"
      ],
      "preferred_options": [
          "Indiamart",
          "Blackbuck"
      ]
  },
  {
      "id": "8442292",
      "type": "FREE_TEXT",
      "question": "Tell us about your previous role breifly"
  },
  {
      "id": "9198647",
      "type": "IMAGE_BASED",
      "image_url": "",
      "image_description": "Take a look at this picture carefully and spot the errors",
      "question": "How many errors did you spot?"
  },
  
]
