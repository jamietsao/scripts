for i in 1 2 ; do ssh foo@bar-${i}.com df -h /data ; done

# deleting line of text from multiple files
sed -i.bak '/line of text/d' * 

# find and replace recursively in sub-directories
find . -name "*.txt" -print0 | xargs -0 sed -i '' -e 's/foo/bar/g'
find ./ -type f -exec sed -i '' -e 's/apple/orange/g' {} \;

# grepping then counting uniq occurrences of a word
grep timezone * | awk '{print $NF}' | sort | uniq -c

# killing all processees that match the grep pattern
ps ax | grep pattern | sed 's/ \([0-9]*\).*/\1/' | xargs kill
