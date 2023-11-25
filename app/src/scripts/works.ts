type WorkCategories = 'coding' | 'study' | 'article' | 'essay' | 'blog post' | 'other'

interface Work {
    id: string
    name: string
    description: string
    summary: string
    category: string
}

export const works: {[id: string]: Work} = {
    flappybirdml: {
        id: 'flappybirdml',
        name: 'Flappy Bird + Neural Network',
        description: 'this is what it is',
        summary: 'this what it is but longer and somewhat detialed',
        category: 'coding',
    },
    eng100reflection: {
        id: 'eng100reflection',
        name: 'English 100 reflection',
        description: 'A reflection on',
        summary: 'this what it is but longer and somewhat detialed',
        category: 'article',
    },
    3: {
        id: '3',
        name: 'English 100 reflection',
        description: 'A reflection on',
        summary: 'this what it is but longer and somewhat detialed',
        category: 'article',
    },
}