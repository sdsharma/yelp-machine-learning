function [Rnk] = determineRnk(sqDMat)

N = size(sqDMat,1);
K = size(sqDMat,2);

Rnk = zeros(N, K);

for n=1:N
    min_val = min(sqDMat(n,:));
    for k=1:K
        if sqDMat(n, k) == min_val
            Rnk(n, k) = 1;
        end
    end
end
