class Beatmap {
    constructor() {
        this.notes = [];
    }

    loadBeatmap(data) {
        this.notes = data.notes.map(note => ({
            type: note.type,
            position: note.position,
            time: note.time,
            duration: note.duration || 0 // For long notes
        }));
    }

    getNotes() {
        return this.notes;
    }
}

export default Beatmap;