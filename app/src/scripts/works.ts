type WorkCategories = 'coding' | 'study' | 'article' | 'essay' | 'blog post' | 'other'

interface Work {
    id: string
    name: string
    description: string
    summary: string
    category: string
    textContent?: string
}

export const works: {[id: string]: Work} = {
    /* flappybirdml: {
        id: 'flappybirdml',
        name: 'Flappy Bird + Neural Network',
        description: 'this is what it is',
        summary: 'this what it is but longer and somewhat detialed',
        category: 'coding',
    }, */
    eng100reflection: {
        id: 'eng100reflection',
        name: 'English 100 reflection',
        description: 'A reflection on my academic writing journey so far.',
        summary: 'A reflection on my academic writing journey so far.',
        category: 'article',
        textContent: `This class did a great  job of teaching me exactly what it said it would: university writing strategies. Before this class I had never done an annotated bibliography, a personalized summary, or a research essay. That's not to say I haven't done research, written essays or summaries, or used citations, I have, but learning the specific structure and being required to understand the syntax for MLA and APA has improved my confidence and prepared me for the future. Throughout this class I’ve been applying what I’ve learned back into the class, but also into my Interdisciplinary Studies and English 112 courses. These classes have been more intensive in writing, with frankly strict expectations for citation skills and academic writing styles. However, because those requirements were well fulfilled by this course, I found myself more confident and comfortable than many of my fellow students.

        In regards to challenging myself, I think I played it pretty safe when I chose The Power of Vulnerability as my Ted Talk. I have the most to say about it, and I immediately recognized how I could incorporate discussions of Toxic Masculinity into my later projects. Nonetheless, I think these comforts were deserved and acceptable, because I've been writing for a new format, finding quality research to inform my perspectives, and using a plethora of citations. Again, things that I'm familiar with, but expanded on in this class and with its projects. If I had more time to write and study, I think I would have learned more trying to deconstruct toxic femininity instead, which has far more layers with much harder effects to identify and quantify. Nonetheless, I’m glad I was aware of my limitations, and I still learned a lot.
        
        If I had to choose a question that I’ll carry forward from this class, it would be: how can I get better at accurately and shortly summarizing the argument(s) of a work so that I can offer my analysis, praise, and critique? so often with the work I've been reading in this class and Kenith's English 112, writing out the argument from a piece of work has been difficult. The authors offer lots of supplementary components to think about and inform the overarching theme that make it difficult to describe their thinking in a sentence or two; but I'm sure it can be done, and I'd like to explore ways to do it better. In many ways I’m pleased that I’m discomforted by a simple summary of an extensive piece of work, as there is always some information lost. However, in my effort to get better at expressing my thoughts more concisely and understandably, getting better at summarizations would be a good start.
        `
    },
}