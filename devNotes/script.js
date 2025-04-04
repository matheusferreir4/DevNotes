class DevNotes {
    constructor() {
        this.notesContainer = document.getElementById('notesContainer');
        this.themeToggle = document.getElementById('themeToggle');
        this.noteCount = document.getElementById('noteCount');
        this.body = document.body;
        this.init();
    }

    init() {
        this.loadTheme();
        this.loadNotes();
        this.setupEventListeners();
        this.setupShortcuts();
    }

    setupEventListeners() {
        document.getElementById('newNote').addEventListener('click', () => this.createNote());
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setupShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'n') {
                e.preventDefault();
                this.createNote();
            }
        });
    }

    createNote() {
        const note = document.createElement('div');
        note.className = 'note-card';
        note.innerHTML = `
            <textarea class="note-content" placeholder="// Start coding here...\n\nfunction hello() {\n  console.log('Hello Dev!');\n}"></textarea>
            <div class="note-toolbar">
                <button class="btn" onclick="this.closest('.note-card').remove(); notes.saveNotes()">🗑️ Delete</button>
            </div>
        `;
        
        this.notesContainer.prepend(note);
        this.addCodeHighlighting(note);
        this.saveNotes();
        note.querySelector('.note-content').focus();
    }

    addCodeHighlighting(note) {
        const textarea = note.querySelector('.note-content');
        textarea.addEventListener('input', () => {
            Prism.highlightAllUnder(note);
            this.saveNotes();
        });
    }

    saveNotes() {
        const notes = [];
        document.querySelectorAll('.note-content').forEach(textarea => {
            notes.push(textarea.value);
        });
        localStorage.setItem('devNotes', JSON.stringify(notes));
        this.noteCount.textContent = notes.length;
    }

    loadNotes() {
        const notes = JSON.parse(localStorage.getItem('devNotes')) || [];
        notes.reverse().forEach(noteText => {
            this.createNote();
            const firstNote = document.querySelector('.note-content');
            firstNote.value = noteText;
        });
        this.noteCount.textContent = notes.length;
    }

    toggleTheme() {
        const newTheme = this.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        this.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('devNotesTheme', newTheme);
        this.themeToggle.querySelector('.icon').textContent = newTheme === 'dark' ? '🌞' : '🌙';
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('devNotesTheme') || 'dark';
        this.body.setAttribute('data-theme', savedTheme);
        this.themeToggle.querySelector('.icon').textContent = savedTheme === 'dark' ? '🌙' : '🌞';
    }
}

const notes = new DevNotes();