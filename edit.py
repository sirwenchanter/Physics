import os
import re

# --- CONFIGURATION & TEMPLATES ---

# Rule 1: Mandatory CSS Variables
css_variables = """
:root {
    --bg-color: #f0f4f8;
    --card-bg: #ffffff;
    --primary-color: #1a365d; /* Deep Physics Blue */
    --accent-color: #e53e3e;  /* Red for errors */
    --success-color: #38a169; /* Green for success */
    --text-color: #2d3748;
    --text-light: #718096;
    --border-radius: 12px;
    --box-shadow: 0 4px 6px rgba(0,0,0,0.07);
}
"""

# Rule 2: Mandatory Navigation Link
back_link = '<a href="index.html" style="display:inline-block; margin-top: 2rem; padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">Back to Home</a>'

# The Logic to generate the improved quiz HTML
def generate_improved_quiz():
    """
    Generates an improved 'physics-test-v2.html' incorporating the design ideas:
    - Lab Sample Card Design
    - Staggered Animations
    - Ghosting wrong answers
    - Explanatory Modals
    - Confetti
    """
    
    # Additional Styles to support the new features (Added on top of Rule 1)
    improved_css = css_variables + """
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden;
        }

        .quiz-container {
            background: var(--card-bg);
            width: 90%;
            max-width: 700px;
            padding: 2.5rem;
            border-radius: var(--border-radius);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            position: relative;
            z-index: 10;
        }

        h2 { margin-bottom: 1.5rem; color: var(--primary-color); }

        /* IDEA: The "Lab Sample" Card Design */
        .option-grid {
            display: grid;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .option-card {
            background: #fff;
            border: 2px solid #e2e8f0;
            border-radius: var(--border-radius);
            padding: 1rem 1.25rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            opacity: 0; /* Hidden initially for stagger animation */
            transform: translateY(20px);
        }

        /* Hover effect: Lift and Glow */
        .option-card:hover {
            border-color: var(--primary-color);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(26, 54, 93, 0.15);
        }

        /* Visual Indicators (A, B, C, D) */
        .letter-badge {
            background: #edf2f7;
            color: var(--primary-color);
            font-weight: 800;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin-right: 1rem;
            font-size: 0.9rem;
        }

        /* IDEA: Ghosting the Wrong Answers */
        .option-card.ghost {
            opacity: 0.3;
            pointer-events: none;
            filter: grayscale(100%);
        }

        /* Correct State */
        .option-card.correct {
            border-color: var(--success-color);
            background-color: rgba(56, 161, 105, 0.05);
        }
        .option-card.correct .letter-badge {
            background: var(--success-color);
            color: white;
        }

        /* Incorrect State */
        .option-card.incorrect {
            border-color: var(--accent-color);
            background-color: rgba(229, 62, 62, 0.05);
            animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
        .option-card.incorrect .letter-badge {
            background: var(--accent-color);
            color: white;
        }

        /* IDEA: Explanatory Modals */
        .explanation-box {
            display: none;
            background: #ebf8ff;
            border-left: 4px solid var(--primary-color);
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 4px;
            color: var(--text-color);
            font-size: 0.95rem;
            animation: fadeIn 0.4s ease;
        }

        /* IDEA: Staggered Entry Animation */
        @keyframes slideUpFade {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* IDEA: Shake Animation for Errors */
        @keyframes shake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% { transform: translate3d(4px, 0, 0); }
        }

        /* Confetti Particle */
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #f00;
            animation: fall linear forwards;
            z-index: 100;
        }
        @keyframes fall {
            to { transform: translateY(100vh) rotate(720deg); }
        }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
    """

    # JavaScript Logic incorporating the improvements
    js_logic = """
    <script>
        const questions = [
            {
                q: "What is the unit of electric resistance?",
                options: ["Ampere", "Volt", "Watt", "Ohm"],
                ans: 3,
                expl: "The Ohm (Ω) is the SI unit of electrical resistance."
            },
            {
                q: "Which law states that energy cannot be created or destroyed?",
                options: ["Newton's First Law", "Conservation of Energy", "Ohm's Law", "Hooke's Law"],
                ans: 1,
                expl: "The Law of Conservation of Energy states that the total energy of an isolated system remains constant."
            },
            {
                q: "What is the approximate value of gravity on Earth?",
                options: ["5.0 m/s²", "9.8 m/s²", "12.4 m/s²", "1.6 m/s²"],
                ans: 1,
                expl: "The standard acceleration due to gravity on Earth is approximately 9.8 m/s²."
            }
        ];

        let currentIdx = 0;
        
        function loadQuestion() {
            const q = questions[currentIdx];
            document.querySelector('h2').innerText = `Q${currentIdx + 1}: ${q.q}`;
            const grid = document.querySelector('.option-grid');
            grid.innerHTML = ''; // Clear previous
            
            // Hide explanation
            document.querySelector('.explanation-box').style.display = 'none';

            q.options.forEach((opt, idx) => {
                const btn = document.createElement('div');
                btn.className = 'option-card';
                // Include Letter Badge
                btn.innerHTML = `<div class="letter-badge">${String.fromCharCode(65+idx)}</div><span>${opt}</span>`;
                btn.onclick = () => selectOption(btn, idx, q.ans, q.expl);
                grid.appendChild(btn);

                // IDEA: Staggered Entry Animation
                btn.style.animation = `slideUpFade 0.5s ease forwards ${idx * 0.1}s`;
            });
        }

        function selectOption(selectedBtn, idx, correctIdx, explanation) {
            const allBtns = document.querySelectorAll('.option-card');
            
            // Disable clicks
            allBtns.forEach(b => b.style.pointerEvents = 'none');

            if (idx === correctIdx) {
                selectedBtn.classList.add('correct');
                triggerConfetti(); // IDEA: Celebrate win
            } else {
                selectedBtn.classList.add('incorrect');
                // Highlight correct one
                allBtns[correctIdx].classList.add('correct');
                
                // IDEA: Ghosting other answers
                allBtns.forEach(b => {
                    if (b !== selectedBtn && b !== allBtns[correctIdx]) {
                        b.classList.add('ghost');
                    }
                });
            }

            // IDEA: Show Explanation
            const explBox = document.querySelector('.explanation-box');
            explBox.innerText = explanation;
            explBox.style.display = 'block';

            // Next Button Logic (simplified)
            setTimeout(() => {
                if(currentIdx < questions.length - 1) {
                    currentIdx++;
                    loadQuestion();
                } else {
                    document.querySelector('h2').innerText = "Quiz Complete!";
                    document.querySelector('.option-grid').innerHTML = '<div style="text-align:center; font-size:1.5rem;">Great Job!</div>';
                    document.querySelector('.explanation-box').style.display = 'none';
                }
            }, 3000);
        }

        // IDEA: Simple Confetti System
        function triggerConfetti() {
            for(let i=0; i<30; i++) {
                const conf = document.createElement('div');
                conf.className = 'confetti';
                conf.style.left = Math.random() * 100 + 'vw';
                conf.style.backgroundColor = ['#f00', '#0f0', '#00f', '#ff0'][Math.floor(Math.random()*4)];
                conf.style.animationDuration = (Math.random() * 2 + 2) + 's';
                document.body.appendChild(conf);
                setTimeout(() => conf.remove(), 4000);
            }
        }

        // Init
        loadQuestion();
    </script>
    """

    # Assemble the HTML
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Physics Lab | Advanced Quiz</title>
        {improved_css}
    </head>
    <body>
        <div class="quiz-container">
            <h2 id="question-text">Loading...</h2>
            <div class="option-grid" id="options-container">
                <!-- Options injected here -->
            </div>
            <div class="explanation-box" id="explanation"></div>
            {back_link}
        </div>
        {js_logic}
    </body>
    </html>
    """
    
    return html_content

def update_hub(file_path='script.js', new_entry=None):
    """
    Rule 3: Updates script.js to register the new simulation file.
    """
    if not os.path.exists(file_path):
        print(f"Warning: {file_path} not found. Skipping hub update.")
        return

    with open(file_path, 'r') as f:
        content = f.read()

    # Check if entry already exists to prevent duplicates
    if new_entry and new_entry.split(':')[1].strip() in content:
        print("Simulation already exists in hub.")
        return

    # Find the closing bracket of the simulations array
    # We look for the specific pattern of the array closing
    pattern = r"(const simulations = \[.*?)(\];)"
    
    # Using DOTALL to allow newlines in the regex match
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        # Insert before the closing bracket
        updated_content = content[:match.end(1)] + ",\n" + new_entry + "\n" + match.group(2)
        
        with open(file_path, 'w') as f:
            f.write(updated_content)
        print(f"SUCCESS: {file_path} updated with new simulation.")
    else:
        print(f"Error: Could not find 'const simulations = [' in {file_path}.")

# --- MAIN EXECUTION ---

if __name__ == "__main__":
    # 1. Generate the improved file
    output_filename = "physics-test-v2.html"
    new_html = generate_improved_quiz()
    
    with open(output_filename, "w") as f:
        f.write(new_html)
    
    print(f"Generated {output_filename} with improved UI/UX.")

    # 2. Define the entry for the Hub (Rule 3)
    new_sim_entry = """
    {
        id: 99,
        title: "Ultimate Physics Challenge",
        description: "An advanced quiz with staggered animations, confetti, and detailed explanations.",
        file: "physics-test-v2.html"
    }"""

    # 3. Update the Hub
    update_hub('script.js', new_sim_entry)