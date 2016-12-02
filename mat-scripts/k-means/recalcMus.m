function [Kmus] = recalcMus(X, Rnk)

N = size(X,1);
D = size(X,2);
K = size(Rnk, 2);

Kmus=zeros(K,D);

for k=1:K
    dividend = [0,0];
    for n=1:N
        dividend = dividend + Rnk(n,k)*X(n,:);
    end
    divisor = sum(Rnk(:,k));
    Kmus(k,:) = dividend/divisor;
end
