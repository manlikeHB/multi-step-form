# Multi-Form Component Test

## Overview

This application is a multi-step form component test designed to guide users through a three-step process. The user interface is divided into three main sections: the Hero Section, the Page/Content Area, and the Button/Nav Area.

### Hero Section

- The Hero Section displays three numbers (1, 2, 3) representing the current step of the application.
- The highlighted number indicates the active step, providing users with clear navigation.

### Page/Content Area

- The Page/Content Area is comprised of three parts, each corresponding to the steps in the Hero Section.
- Input fields within each part are tracked by the Hero Section, dynamically updating the highlighted step as users progress.
- Input field requirements are visually indicated: a red bottom border for unmet requirements and a green bottom border for met requirements.

### Button/Nav Area

- The Button/Nav Area contains navigation buttons allowing users to move forward or backward through the form.
- Hover effects highlight the buttons for enhanced user interactivity.
- The "Next" button progresses to the next step, and the "Prev" button allows users to navigate back.

## Usage

To experience the multi-step form:

1. Start at the initial step indicated in the Hero Section.
2. Complete the input fields in each part of the Page/Content Area.
3. Observe the dynamic updates in the Hero Section as you progress.
4. Utilize the navigation buttons in the Button/Nav Area to move between steps.

## Development

### Installation

```bash
# Clone the repository
git clone https://github.com/manlikeHB/multi-step-form.git

# Navigate to the project directory
cd multi-step-form 
```

### Running the Application

```bash
# Install dependencies
npm install

# Start the development server
npm start 
```