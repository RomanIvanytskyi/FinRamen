module.exports = {
    parserPreset: {
        parserOpts: {
            headerPattern: /^(FIN-[0-9]*) [A-Za-z0-9 ]*$/,
            headerCorrespondence: ["ticket"],
        },
    },
    plugins: [
        {
            rules: {
                "header-match-team-pattern": (parsed) => {
                    const { ticket } = parsed;
                    if (ticket === null) {
                        return [
                            false,
                            "header must be in format 'FIN-1 Commit message",
                        ];
                    }
                    return [true, ""];
                }
            },
        },
    ],
    rules: {
        "header-match-team-pattern": [2, "always"]
    },
};