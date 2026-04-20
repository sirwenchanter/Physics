const simulations = [
    {
        id: 1,
        title: "Pendulum Lab",
        description: "Study period, energy conservation, and non-linear dynamics of a simple pendulum.",
        file: "simulation-1.html",
        tag: "Classic"
    },
    {
        id: 2,
        title: "Projectile Motion",
        description: "Analyze parabolic trajectories with adjustable velocity, angle, and real-time path tracking.",
        file: "simulation-2.html",
        tag: "Kinetics"
    },
    {
        id: 3,
        title: "Advanced Free Fall",
        description: "Explore atmospheric drag, terminal velocity, and variable gravity on different planetary bodies.",
        file: "simulation-3.html",
        tag: "Dynamics"
    },
    {
        id: 4,
        title: "Wave Superposition Lab",
        description: "Visualize constructive and destructive interference using dual-wave interaction models.",
        file: "simulation-4.html",
        tag: "Waves"
    },
    {
        id: 5,
        title: "Harmonic Oscillator",
        description: "Analyze spring-mass systems with damping and real-time energy conversion phase-space plots.",
        file: "simulation-5.html",
        tag: "Mechanics"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sim-grid');
    if (!grid) return;

    simulations.forEach(sim => {
        const card = document.createElement('a');
        card.href = sim.file;
        card.className = 'sim-card';

        let tagHtml = '';
        if (sim.tag) {
            tagHtml = `<span class="badge">${sim.tag}</span>`;
        }

        card.innerHTML = `
            ${tagHtml}
            <h3>${sim.title}</h3>
            <p>${sim.description}</p>
            <div class="btn-more">Launch Simulator <i class="fas fa-arrow-right"></i></div>
        `;

        grid.appendChild(card);
    });
});