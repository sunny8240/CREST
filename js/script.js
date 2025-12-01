// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const hamburger = mobileMenuBtn.querySelector('.hamburger');
        if (mobileMenu.classList.contains('active')) {
            hamburger.style.background = 'transparent';
        } else {
            hamburger.style.background = 'var(--text-secondary)';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const hamburger = mobileMenuBtn.querySelector('.hamburger');
            hamburger.style.background = 'var(--text-secondary)';
        });
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
    }
    
    lastScroll = currentScroll;
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message (you can replace this with a proper notification)
        alert('Thank you for your message! We\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .event-card, .team-card, .offering-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Button click effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* Team chart rendering (curved connectors) */
function renderTeamChart(svgEl, data) {
    if (!svgEl || !data) return;

    const svgNS = 'http://www.w3.org/2000/svg';
    // clear
    while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);

    const width = 1200;
    const levelGap = 120; // vertical gap
    const nodeW = 240;
    const nodeH = 84;

    // simple layout: root at top center, children across next row, grandchildren below
    const root = data;
    const columns = root.children ? root.children.length : 1;
    const svgHeight = Math.max(400, (2 + (root.children||[]).reduce((m,c)=> Math.max(m, (c.children||[]).length),0)) * levelGap + 200);
    svgEl.setAttribute('viewBox', `0 0 ${width} ${svgHeight}`);

    function getX(colIndex, totalCols) {
        const padding = 80;
        const available = width - padding * 2;
        return padding + (available * (colIndex + 0.5) / totalCols);
    }

    // render root node at y = 60
    const rootX = width / 2;
    const rootY = 60;

    function initials(name){
        if(!name) return '';
        return name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase();
    }

    function drawNode(x,y,nodeId, node) {
        const g = document.createElementNS(svgNS,'g');
        g.setAttribute('class','node node-card');
        g.setAttribute('transform',`translate(${x - nodeW/2},${y - nodeH/2})`);
        g.setAttribute('data-id', nodeId);

        // background rect (card)
        const rect = document.createElementNS(svgNS,'rect');
        rect.setAttribute('width', nodeW);
        rect.setAttribute('height', nodeH);
        rect.setAttribute('class','node-rect');
        rect.setAttribute('rx','12');
        g.appendChild(rect);

        // avatar circle
        const avatar = document.createElementNS(svgNS,'circle');
        const avSize = 44;
        avatar.setAttribute('cx', 24);
        avatar.setAttribute('cy', nodeH/2);
        avatar.setAttribute('r', avSize/2);
        avatar.setAttribute('class','node-avatar');
        g.appendChild(avatar);

        // initials text inside avatar
        const initialText = document.createElementNS(svgNS,'text');
        initialText.setAttribute('x', 24);
        initialText.setAttribute('y', nodeH/2 + 6);
        initialText.setAttribute('class','node-sub');
        initialText.setAttribute('text-anchor','middle');
        initialText.setAttribute('font-weight','700');
        initialText.textContent = initials(node.name || '');
        g.appendChild(initialText);

        // name
        const nameText = document.createElementNS(svgNS,'text');
        nameText.setAttribute('x', 56);
        nameText.setAttribute('y', 28);
        nameText.setAttribute('class','node-text');
        nameText.textContent = node.name;
        g.appendChild(nameText);

        // role/title
        if (node.title) {
            const sub = document.createElementNS(svgNS,'text');
            sub.setAttribute('x', 56);
            sub.setAttribute('y', 50);
            sub.setAttribute('class','node-sub');
            sub.textContent = node.title;
            g.appendChild(sub);
        }

        // hover show pointer
        g.style.cursor = 'pointer';
        g.addEventListener('mouseenter', () => {
            rect.setAttribute('stroke', 'var(--accent)');
            rect.setAttribute('filter','drop-shadow(0 8px 20px rgba(0,255,209,0.08))');
        });
        g.addEventListener('mouseleave', () => {
            rect.setAttribute('stroke', 'rgba(0,255,209,0.06)');
            rect.removeAttribute('filter');
        });

        svgEl.appendChild(g);
        return {cx: x, cy: y, w: nodeW, h: nodeH};
    }

    // draw root
    const rootNode = drawNode(rootX, rootY, 'root', {name: root.title || root.name, title: ''});

    // first level children
    const first = root.children || [];
    const firstY = rootY + levelGap;
    const firstPositions = [];
    for (let i=0;i<first.length;i++){
        const colX = getX(i, first.length);
        const pos = drawNode(colX, firstY, 'f'+i, first[i]);
        firstPositions.push({x:colX,y:firstY,node:first[i]});

        // connector from root to child (curved)
        const path = document.createElementNS(svgNS,'path');
        const startX = rootX;
        const startY = rootY + nodeH/2;
        const endX = colX;
        const endY = firstY - nodeH/2;
        const cx1 = startX;
        const cy1 = (startY + endY)/2;
        const cx2 = endX;
        const cy2 = cy1;
        const d = `M ${startX} ${startY} C ${cx1} ${cy1} ${cx2} ${cy2} ${endX} ${endY}`;
        path.setAttribute('d', d);
        path.setAttribute('class','connector');
        svgEl.appendChild(path);
    }

    // second level (members under each first-level)
    const secondYBase = firstY + levelGap;
    for (let i=0;i<first.length;i++){
        const children = first[i].children || [];
        if (children.length === 0) continue;
        const total = children.length;
        for (let j=0;j<total;j++){
            // position children under their parent group area
            const parentX = firstPositions[i].x;
            // spread around parent
            const spread = Math.max(1,total);
            const idx = j;
            const offset = (idx - (total-1)/2) * 140;
            const x = parentX + offset;
            const y = secondYBase;
            drawNode(x, y, `c${i}-${j}`, children[j]);

            // connector from parent to child
            const path = document.createElementNS(svgNS,'path');
            const startX = parentX;
            const startY = firstY + nodeH/2;
            const endX = x;
            const endY = y - nodeH/2;
            const cx1 = startX;
            const cy1 = startY + (endY - startY)/2;
            const cx2 = endX;
            const cy2 = cy1;
            const d = `M ${startX} ${startY} C ${cx1} ${cy1} ${cx2} ${cy2} ${endX} ${endY}`;
            path.setAttribute('d', d);
            path.setAttribute('class','connector');
            svgEl.appendChild(path);
        }
    }
}

// Populate sidebar lists and wire search + zoom + focus
function initTeamSidebar() {
    const dataEl = document.getElementById('team-data');
    if (!dataEl) return;
    const data = JSON.parse(dataEl.textContent);
    const flat = [];
    // flatten with ids used by renderTeamChart (root, f{i}, c{i}-{j})
    flat.push({ id: 'root', name: data.root.name, title: data.root.title });
    data.root.leads.forEach((lead, i) => {
        const fid = `f${i}`;
        flat.push({ id: fid, name: lead.name, title: lead.title });
        (lead.members || []).forEach((m, j) => {
            flat.push({ id: `c${i}-${j}`, name: m.name, title: m.title });
        });
    });

    const list = document.getElementById('teamList');
    const listMobile = document.getElementById('teamListMobile');
    const teamChart = document.getElementById('teamChart');
    if (!list || !listMobile || !teamChart) return;

    flat.forEach(item => {
        const li = document.createElement('div');
        li.className = 'list-item';
        li.dataset.target = item.id;
        li.innerHTML = `<div class="li-avatar">${(item.name||'').split(' ').map(n=>n[0]).slice(0,2).join('')}</div><div class="li-meta"><div class="li-name">${item.name}</div><div class="li-role">${item.title||''}</div></div>`;
        li.addEventListener('click', () => focusOnNode(item.id));
        list.appendChild(li);

        const li2 = li.cloneNode(true);
        li2.addEventListener('click', () => focusOnNode(item.id));
        listMobile.appendChild(li2);
    });

    // search
    const search = document.getElementById('teamSearch');
    if (search) {
        search.addEventListener('input', (e) => {
            const q = e.target.value.trim().toLowerCase();
            Array.from(list.children).forEach(li => {
                const name = li.querySelector('.li-name').textContent.toLowerCase();
                const role = li.querySelector('.li-role').textContent.toLowerCase();
                li.style.display = (!q || name.includes(q) || role.includes(q)) ? '' : 'none';
            });
            Array.from(listMobile.children).forEach(li => {
                const name = li.querySelector('.li-name').textContent.toLowerCase();
                const role = li.querySelector('.li-role').textContent.toLowerCase();
                li.style.display = (!q || name.includes(q) || role.includes(q)) ? '' : 'none';
            });
        });
    }

    // zoom buttons
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');
    const zoomReset = document.getElementById('zoomReset');
    if (zoomIn) zoomIn.addEventListener('click', () => { scale = Math.min(2.75, scale + 0.15); applyTransform(); });
    if (zoomOut) zoomOut.addEventListener('click', () => { scale = Math.max(0.25, scale - 0.15); applyTransform(); });
    if (zoomReset) zoomReset.addEventListener('click', () => { scale = 1; translateX = 0; translateY = 0; applyTransform(); });

}

function focusOnNode(id) {
    // find element by data-id inside svg
    const svg = document.getElementById('teamChart');
    if (!svg) return;
    const node = svg.querySelector(`[data-id="${id}"]`);
    if (!node) return;
    // compute node center in svg coordinates
    const rect = node.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();
    const cx = rect.left + rect.width/2 - svgRect.left;
    const cy = rect.top + rect.height/2 - svgRect.top;
    // viewport center
    const wrapper = document.querySelector('.svg-wrapper');
    if (!wrapper) return;
    const vw = wrapper.clientWidth/2;
    const vh = wrapper.clientHeight/2;
    // convert to transform space
    // adjust translate so that (cx,cy) maps to center
    translateX += (vw - cx) / scale;
    translateY += (vh - cy) / scale;
    // apply small highlight pulse
    applyTransform();
    node.classList.add('node-highlight');
    setTimeout(()=> node.classList.remove('node-highlight'), 1400);
}

// run init when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initTeamSidebar();
});

// if there's a #teamChart and #team-data present, render
document.addEventListener('DOMContentLoaded', () => {
    const teamJsonEl = document.getElementById('team-data');
    const svg = document.getElementById('teamChart');
    if (teamJsonEl && svg) {
        try {
            const data = JSON.parse(teamJsonEl.textContent);
            renderTeamChart(svg, data);
        } catch (e) {
            console.error('Failed to parse team data', e);
        }
    }
    // Hero typing subtitle
    const subtitles = [
        'Hands-on CTFs • Workshops • Research',
        'Ethical Hacking • Network Defense • Tooling'
    ];
    const subEl = document.getElementById('hero-subtitle');
    if (subEl) {
        let idx = 0;
        function typeText(text, el, cb) {
            el.textContent = '';
            let i = 0;
            const t = () => {
                if (i <= text.length) {
                    el.textContent = text.slice(0, i);
                    i++;
                    setTimeout(t, 38 + Math.random() * 50);
                } else if (cb) {
                    setTimeout(cb, 900);
                }
            };
            t();
        }
        function loop() {
            typeText(subtitles[idx], subEl, () => { idx = (idx + 1) % subtitles.length; loop(); });
        }
        loop();
    }

    // Team chart pan & zoom and modal interactions
    const svgWrap = document.querySelector('.team-hierarchy svg');
    if (svgWrap) {
        // wrap svg in group transform handling
        let isPanning = false, startX=0, startY=0, translateX=0, translateY=0, scale=1;
        svgWrap.style.touchAction = 'none';

        function applyTransform(){
            svgWrap.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        }

        svgWrap.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = -e.deltaY * 0.0015;
            const newScale = Math.min(2.5, Math.max(0.6, scale + delta));
            // adjust translate to zoom toward cursor
            const rect = svgWrap.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;
            const factor = newScale/scale;
            translateX = (translateX - cx) * factor + cx;
            translateY = (translateY - cy) * factor + cy;
            scale = newScale;
            applyTransform();
        }, { passive: false });

        svgWrap.addEventListener('pointerdown', (e) => {
            isPanning = true; svgWrap.setPointerCapture(e.pointerId);
            startX = e.clientX - translateX; startY = e.clientY - translateY;
        });
        svgWrap.addEventListener('pointermove', (e) => {
            if (!isPanning) return;
            translateX = e.clientX - startX; translateY = e.clientY - startY; applyTransform();
        });
        svgWrap.addEventListener('pointerup', (e) => { isPanning = false; try{ svgWrap.releasePointerCapture(e.pointerId);}catch{} });

        // node click -> modal
        svgWrap.addEventListener('click', (e) => {
            let target = e.target;
            while (target && target !== svgWrap) {
                if (target.classList && target.classList.contains('node-card')) {
                    const nodeId = target.getAttribute('data-id');
                    openMemberModal(nodeId);
                    return;
                }
                target = target.parentNode;
            }
        });
    }

    // Modal helper
    const modal = document.getElementById('memberModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalClose = document.getElementById('modalClose');
    function openMemberModal(nodeId){
        const teamJsonEl = document.getElementById('team-data');
        if (!teamJsonEl) return;
        let data;
        try { data = JSON.parse(teamJsonEl.textContent); } catch { return; }
        // find node (simple search by name or id)
        function findNode(node){ if (!node) return null; if ((node.name && node.name.replace(/\s+/g,'')===nodeId) || node.id===nodeId || node.name===nodeId) return node; if (node.children) for (const c of node.children){ const r=findNode(c); if (r) return r; } return null; }
        // try exact name match first
        let node = findNode({children: data.children});
        if (!node) {
            // fallback: find first with matching data-id formatted (f0, c0-0 etc)
            // parse numeric indices
            if (nodeId && nodeId.startsWith('f')) {
                const idx = parseInt(nodeId.slice(1)); node = data.children[idx];
            } else if (nodeId && nodeId.startsWith('c')) {
                const parts = nodeId.slice(1).split('-'); const p = parseInt(parts[0]), q = parseInt(parts[1]); node = (data.children[p] && data.children[p].children) ? data.children[p].children[q] : null;
            } else if (nodeId==='root') node = data;
        }
        if (!node) return;
        // populate modal
        document.getElementById('modalTitle').textContent = node.name || 'Member';
        document.getElementById('modalRole').textContent = node.title || '';
        document.getElementById('modalBio').textContent = node.bio || 'No bio available.';
        document.getElementById('modalContact').textContent = node.contact || '';
        modal.setAttribute('aria-hidden','false');
    }
    function closeMemberModal(){ const modal = document.getElementById('memberModal'); if (modal) modal.setAttribute('aria-hidden','true'); }
    if (modalClose) modalClose.addEventListener('click', closeMemberModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeMemberModal);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeMemberModal(); });
});
