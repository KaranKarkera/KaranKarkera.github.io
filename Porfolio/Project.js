// Function to open the popup with image and description
function openPopup(imageSrc, description) {
  const contentHTML = `
    <img src="${imageSrc}" alt="Popup Image" />
    <p>${description}</p>
  `;
  document.getElementById('popup-text').innerHTML = contentHTML;
  document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Object containing all project details
const projects = {
  methanol: {
    img: 'Projects/meth.jpeg',
    desc: `This project is in its experimental stage and aims to assist research labs by predicting optimal temperature, pressure, and production rates for methanol synthesis using syngas inputs.<br><br>
    Built using a Random Forest Regressor from scikit-learn, it takes user inputs—like gas composition, catalyst type, and flow rate—via a custom Tkinter GUI.<br><br>
    The model is trained on lab-generated data, and it includes a compound parser that computes atomic-weight-based encodings of complex catalyst formulas. The goal is to accelerate lab calibration and reduce the setup time for methanol production experiments.<br><br>
    Github Repository: <a href="https://github.com/KaranKarkera/Python_Projects/tree/main/Methanol_Production_Prediction_RF" target="_blank">Link to the project Github Repository</a><br><br>
    LinkedIn: <a href="https://www.linkedin.com/posts/karankarkera_machinelearning-internshipexperience-iisc-activity-7355244242383814657-Ds9J" target="_blank">Link to my LinkedIn</a>`
  },

  segmentation: {
    img: 'Projects/meth.jpeg',
    desc: `This project focuses on binary segmentation for road detection using a custom UNet model built with PyTorch. It processes Cityscapes-style urban scene images to generate binary masks that identify road areas.<br><br>
    The pipeline includes image preprocessing, class color mapping, dataset creation, and model training with BCE and Dice Loss. The model is trained with mixed precision (fp16) using the Accelerate library and evaluated using IoU and Dice Coefficient.<br><br>
    Github Repository: <a href="https://github.com/KaranKarkera/Python_Projects/tree/main/Road_Segmentation" target="_blank">Link to the project Github Repository</a><br><br>
    LinkedIn: <a href="https://www.linkedin.com/in/karankarkera/" target="_blank">Link to my LinkedIn</a>`
  },

  fanpage: {
    img: 'Projects/BWU.png',
    desc: `This project is a static fan webpage created as a tribute to the singer BoyWithUke, developed using HTML, CSS, and vanilla JavaScript. It serves as a simple yet engaging fan information hub.<br><br>
    The site includes a home page for tour dates, an about page with the artist’s journey, and a shop page for merch and albums. It also features direct links to the artist’s social media.<br><br>
    Github Repository: <a href="https://github.com/KaranKarkera/Web_Development/tree/main/Singer_webpage" target="_blank">Link to the project Github Repository</a><br><br>
    LinkedIn: <a href="https://www.linkedin.com/posts/karankarkera_webdevelopment-html-css-activity-7350571163607035907-p3xX" target="_blank">Link to my LinkedIn</a>`
  },

  gesture: {
    img: 'Projects/Cursor.png',
    desc: `This project enables hands-free mouse control using a webcam and computer vision. Built with OpenCV, MediaPipe, and PyAutoGUI, it tracks the user’s hand and interprets gestures.<br><br>
    It recognizes three gestures: an open palm to move the cursor, a pinch to simulate click-drag, and a fist to stop motion. The system includes smoothing, motion thresholds, and adjustable parameters for better control.<br><br>
    Github Repository: <a href="https://github.com/KaranKarkera/Python_Projects/tree/main/Cursor_Control" target="_blank">Link to the project Github Repository</a><br><br>
    LinkedIn: <a href="https://www.linkedin.com/posts/karankarkera_computervision-ai-python-activity-7348030879400714240-nBOD" target="_blank">Link to my LinkedIn</a>`
  }
};

// Function to show a project by ID
function showProject(projectId) {
  const project = projects[projectId];
  if (project) {
    openPopup(project.img, project.desc);
  } else {
    console.warn(`Project ID '${projectId}' not found.`);
  }
}

// Handle popup trigger via URL hash
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;

  // Mapping URL hash to project keys
  const hashToProjectId = {
    '#BestPjt': 'segmentation',
    '#LatestPjt': 'methanol'
  };

  const projectId = hashToProjectId[hash];
  if (projectId) {
    showProject(projectId);
  }
});
