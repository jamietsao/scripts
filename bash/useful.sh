for i in 1 2 ; do ssh foo@bar-${i}.com df -h /data ; done

# deleting line of text from multiple files
sed -i.bak '/line of text/d' * 

# killing all processees that match the grep pattern
ps ax | grep pattern | sed 's/ \([0-9]*\).*/\1/' | xargs kill