type Success<D> = {
    success: true;
    data: D;
};

type Fail = {
    success: false;
    error?: Error;
    raison: string;
};

type Loading<D> = {
    loading: true;
    success: null;
    data?: D;
};

// Union discriminée représentant les trois états possibles d'un appel API
export type Result<D> = Fail | Success<D> | Loading<D>;
