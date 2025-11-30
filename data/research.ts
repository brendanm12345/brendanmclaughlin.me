import { link } from "fs"

export const research: Record<string, any> = {
    weaver: {
        name: 'Weaver: Shrinking the Generation-Verification Gap by Scaling Compute for Verification',
        description: 'A framework for designing a strong verifier by combining multiple weak, imperfect verifiers.',
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
