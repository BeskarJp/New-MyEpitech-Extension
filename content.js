function addPercentage() {
    const badges = document.querySelectorAll('span.mantine-Badge-label');
    
    badges.forEach(badge => {

        const text = badge.textContent.trim();
        if (text.includes('%') || !text.includes('/'))
            return;

        const match = text.match(/^(\d+)\s*\/\s*(\d+)(\s*TESTS)?$/i);
        if (match) {
            const passed = parseInt(match[1], 10);
            const total = parseInt(match[2], 10);
            
            if (total > 0) {
                const percentage = ((passed / total) * 100).toFixed(1);
                badge.textContent = `${text} (${percentage}%)`;
            }
        }
    });
}

addPercentage();

const observer = new MutationObserver(() => {
    addPercentage();
});

observer.observe(document.body, { childList: true, subtree: true });
