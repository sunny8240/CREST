let currentStep = 1;
        const totalSteps = 4;
        let selectedInterests = [];

        const form = document.getElementById('applicationForm');
        const backBtn = document.getElementById('backBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        const successScreen = document.getElementById('successScreen');
        const resetBtn = document.getElementById('resetBtn');
        const interestsGrid = document.getElementById('interestsGrid');
        const interestsInput = document.getElementById('interestsInput');

        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });

            const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });
        }

        function updateProgress() {
            document.querySelectorAll('.progress-step').forEach((step, index) => {
                if (index + 1 <= currentStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });

            for (let i = 1; i < totalSteps; i++) {
                const line = document.getElementById(`line${i}`);
                if (i < currentStep) {
                    line.classList.add('active');
                } else {
                    line.classList.remove('active');
                }
            }
        }

        function showStep(step) {
            document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
            document.querySelector(`.form-step[data-step="${step}"]`).classList.add('active');

            if (step === 1) {
                backBtn.style.display = 'none';
            } else {
                backBtn.style.display = 'flex';
            }

            if (step === totalSteps) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'flex';
            } else {
                nextBtn.style.display = 'flex';
                submitBtn.style.display = 'none';
            }

            updateProgress();
        }

        function validateStep() {
            const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
            const inputs = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');

            for (let input of inputs) {
                if (!input.value.trim()) {
                    input.focus();
                    return false;
                }
            }

            if (currentStep === 3 && selectedInterests.length === 0) {
                alert('Please select at least one area of interest');
                return false;
            }

            return true;
        }

        nextBtn.addEventListener('click', () => {
            if (validateStep() && currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
            }
        });

        backBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
            }
        });

        interestsGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('interest-btn')) {
                const interest = e.target.dataset.interest;
                const index = selectedInterests.indexOf(interest);

                if (index > -1) {
                    selectedInterests.splice(index, 1);
                    e.target.classList.remove('selected');
                } else {
                    selectedInterests.push(interest);
                    e.target.classList.add('selected');
                }

                interestsInput.value = selectedInterests.join(',');
            }
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!validateStep()) {
                return;
            }

            submitBtn.disabled = true;
            document.getElementById('submitText').style.display = 'none';
            document.getElementById('submitLoading').style.display = 'flex';

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            data.interests = selectedInterests;

            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Form submitted:', data);

            document.getElementById('userEmail').textContent = data.email;
            form.style.display = 'none';
            document.querySelector('.progress-container').style.display = 'none';
            successScreen.classList.add('active');

            submitBtn.disabled = false;
            document.getElementById('submitText').style.display = 'flex';
            document.getElementById('submitLoading').style.display = 'none';
        });

        resetBtn.addEventListener('click', () => {
            form.reset();
            currentStep = 1;
            selectedInterests = [];
            document.querySelectorAll('.interest-btn').forEach(btn => btn.classList.remove('selected'));
            showStep(1);
            form.style.display = 'block';
            document.querySelector('.progress-container').style.display = 'block';
            successScreen.classList.remove('active');
        });

        showStep(1);