function CreateRelations(path, path_dest)
    files = dir(strcat(path, '/*.mat'));
    
    for file = files'
        data_unparsed = load(strcat(file.folder, '\\', 'yelp_businessesBelmont.mat'));
        data_parsed = RemoveNulls(data_unparsed);
        disp(data_parsed)
        
        %file = fopen(strcat(path_dest, '\\', file.name), 'w');
               
        %for i = 1:3
        %    for i = 1:3
        %end
        %fprintf(file, data_parsed
    end
end
