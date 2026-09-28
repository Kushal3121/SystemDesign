class File {
public:
    string name;
    string extension;
    long size;

    File(string name, string extension, long size) {
        this->name = name;
        this->extension = extension;
        this->size = size;
    }
};

class FileSearcher {
public:

    vector<File*> searchByExtension(
        vector<File*>& files,
        string extension
    ) {
        vector<File*> result;

        for (File* file : files) {
            if (file->extension == extension) {
                result.push_back(file);
            }
        }

        return result;
    }

    vector<File*> searchByName(
        vector<File*>& files,
        string keyword
    ) {
        vector<File*> result;

        for (File* file : files) {
            if (file->name.find(keyword) != string::npos) {
                result.push_back(file);
            }
        }

        return result;
    }

    vector<File*> searchBySize(
        vector<File*>& files,
        long maxSize
    ) {
        vector<File*> result;

        for (File* file : files) {
            if (file->size <= maxSize) {
                result.push_back(file);
            }
        }

        return result;
    }
};