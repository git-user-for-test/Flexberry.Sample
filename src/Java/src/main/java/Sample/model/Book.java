package Sample.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Sample.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Book
 */
@Entity(name = "Book")
@Table(schema = "public", name = "Book")
public class Book {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Name")
    private String name;

    @Column(name = "Capacity")
    private Integer capacity;

    @Column(name = "Annotation")
    private String annotation;

    @Column(name = "Agenda")
    private String agenda;

    @Column(name = "PicturesAuthor")
    private String picturesauthor;

    @Column(name = "Reaction")
    private String reaction;

    @Column(name = "Copyright")
    private String copyright;

    @Column(name = "LibraryCode")
    private String librarycode;

    @Column(name = "Tags")
    private String tags;

    @Column(name = "Theme")
    private String theme;

    @Column(name = "Topic")
    private String topic;

    @Column(name = "Corrector")
    private String corrector;

    @Column(name = "Format")
    private String format;

    @Column(name = "Font")
    private String font;

    @Column(name = "PublishDate")
    private Date publishdate;

    @Column(name = "Bestseller")
    private Boolean bestseller;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Country")
    @Convert("Country")
    @Column(name = "Country", length = 16, unique = true, nullable = false)
    private UUID _countryid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Country", insertable = false, updatable = false)
    private Country country;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Language")
    @Convert("Language")
    @Column(name = "Language", length = 16, unique = true, nullable = false)
    private UUID _languageid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Language", insertable = false, updatable = false)
    private Language language;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Author")
    @Convert("Author")
    @Column(name = "Author", length = 16, unique = true, nullable = false)
    private UUID _authorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Author", insertable = false, updatable = false)
    private Author author;


    public Book() {
        super();
    }

    public void setPrimarykey(UUID primaryKey) {
        this.primarykey = primaryKey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

     public String getName() {
        return name;
    }

     public void setName(String name) {
        this.name = name;
    }

     public Integer getCapacity() {
        return capacity;
    }

     public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

     public String getAnnotation() {
        return annotation;
    }

     public void setAnnotation(String annotation) {
        this.annotation = annotation;
    }

     public String getAgenda() {
        return agenda;
    }

     public void setAgenda(String agenda) {
        this.agenda = agenda;
    }

     public String getPicturesAuthor() {
        return picturesauthor;
    }

     public void setPicturesAuthor(String picturesauthor) {
        this.picturesauthor = picturesauthor;
    }

     public String getReaction() {
        return reaction;
    }

     public void setReaction(String reaction) {
        this.reaction = reaction;
    }

     public String getCopyright() {
        return copyright;
    }

     public void setCopyright(String copyright) {
        this.copyright = copyright;
    }

     public String getLibraryCode() {
        return librarycode;
    }

     public void setLibraryCode(String librarycode) {
        this.librarycode = librarycode;
    }

     public String getTags() {
        return tags;
    }

     public void setTags(String tags) {
        this.tags = tags;
    }

     public String getTheme() {
        return theme;
    }

     public void setTheme(String theme) {
        this.theme = theme;
    }

     public String getTopic() {
        return topic;
    }

     public void setTopic(String topic) {
        this.topic = topic;
    }

     public String getCorrector() {
        return corrector;
    }

     public void setCorrector(String corrector) {
        this.corrector = corrector;
    }

     public String getFormat() {
        return format;
    }

     public void setFormat(String format) {
        this.format = format;
    }

     public String getFont() {
        return font;
    }

     public void setFont(String font) {
        this.font = font;
    }

     public Date getPublishDate() {
        return publishdate;
    }

     public void setPublishDate(Date publishdate) {
        this.publishdate = publishdate;
    }

     public Boolean getBestseller() {
        return bestseller;
    }

     public void setBestseller(Boolean bestseller) {
        this.bestseller = bestseller;
    }

}