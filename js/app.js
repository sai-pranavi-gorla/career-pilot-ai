function scrollToFeatures() {
    document.getElementById("features")
    .scrollIntoView({
        behavior: "smooth"
    });
}

function generateCareer() {

    let interest =
    document.getElementById("interest").value;

    let result =
    document.getElementById("result");

    result.innerHTML =
    "<h2>🤖 Analyzing Profile...</h2>";

    setTimeout(() => {

        if (interest === "Web Development") {

            result.innerHTML = `
            <h2>🚀 Frontend Developer</h2>

            <p><strong>📊 Profile Match:</strong> 88%</p>

            <p><strong>💰 Salary:</strong> ₹4 - ₹12 LPA</p>

            <p><strong>📚 Skills To Learn:</strong></p>

            <ul>
                <li>React</li>
                <li>Git & GitHub</li>
                <li>REST APIs</li>
                <li>Firebase</li>
            </ul>
            `;
        }

        else if (interest === "AI/ML") {

            result.innerHTML = `
            <h2>🤖 AI Engineer</h2>

            <p><strong>📊 Profile Match:</strong> 85%</p>

            <p><strong>💰 Salary:</strong> ₹8 - ₹25 LPA</p>

            <p><strong>📚 Skills To Learn:</strong></p>

            <ul>
                <li>Machine Learning</li>
                <li>TensorFlow</li>
                <li>Deep Learning</li>
            </ul>
            `;
        }

        else {

            result.innerHTML =
            "<h2>Please select an interest</h2>";
        }

    }, 1500);
}
function showFeature(type){

    let box =
    document.getElementById("featureResult");

    if(type === "career"){

        box.innerHTML = `
        <h2>🎯 Career Guidance</h2>

        <p>
        CareerPilot AI analyzes your interests,
        skills, and experience to suggest
        suitable career paths.
        </p>
        `;
    }

    else if(type === "roadmap"){

        box.innerHTML = `
        <h2>📚 Learning Roadmap</h2>

        <p>
        Get a step-by-step learning plan
        to become job-ready.
        </p>
        `;
    }

    else if(type === "insights"){

        box.innerHTML = `
        <h2>💼 Industry Insights</h2>

        <p>
        Explore salaries, trends,
        and future opportunities.
        </p>
        `;
    }
}