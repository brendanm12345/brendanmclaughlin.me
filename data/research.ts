import { link } from "fs"

export const research: Record<string, any> = {
    weaver: {
        name: 'Weaver: Shrinking the Generation-Verification Gap by Scaling Compute for Verification',
        description: 'A framework that combines multiple weak verifiers (reward models + LM judges) to achieve o3-mini-level accuracy models like Llama 3.3 70B Instruct',
        image: '',
        conferences: ['NeurIPS 2025', 'ES-FoMoIII@ICML2025'],
        links: [
            {
                name: 'Paper',
                url: 'https://arxiv.org/abs/2506.18203',
            },
            {
                name: "GitHub",
                url: 'https://github.com/HazyResearch/scaling-verification',
            }
        ],
    },
}
