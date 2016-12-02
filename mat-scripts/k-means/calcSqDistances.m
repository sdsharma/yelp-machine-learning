function [dists] = calcSqDistances(X, Kmus)

N = size(X,1);
D = size(X,2);
K = size(Kmus, 1);

dists = zeros(N, K);

for n=1:N
    for k=1:K
        x=[0,0;0,0];
        x(1,:) = X(n,:);
        x(2,:) = Kmus(k,:);
        dists(n, k) = power(pdist(x,'euclidean'), 2);
    end
end
