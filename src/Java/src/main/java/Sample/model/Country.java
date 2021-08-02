package Sample.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Sample.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Country
 */
@Entity(name = "Country")
@Table(schema = "public", name = "Country")
public class Country {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Name")
    private String name;


    public Country() {
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

}