import styles from './info.module.css'
import { GrContactInfo } from 'react-icons/gr'
import { MdFamilyRestroom } from 'react-icons/md'
import { TbAddressBook } from 'react-icons/tb'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { RiMentalHealthFill } from 'react-icons/ri'
function Info({ person }) {
  return (
    <>
      {/*About*/}
      <section className={styles.about}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <GrContactInfo />
            <span>About</span>
          </h1>
          <div className={styles.right}>
            <h3>
              <span>Date of Birth:</span> {person.birthdate}
            </h3>
            <h3>
              <span>Place of Birth:</span> {person.place_of_birth}
            </h3>
            <h3>
              <span>{person.basic_info}</span>
            </h3>
            <h3>
              <span>Favorite Drink:</span> {person.favorite_drink}
            </h3>
          </div>
        </div>
      </section>

      {/* Family */}
      <section className={styles.family}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <MdFamilyRestroom />
            <span>Family</span>
          </h1>
          <div className={styles.right}>
            <h3>
              <span>Spouse:</span> {person.family.spouse}
            </h3>
            <h3>
              <span>Children:</span>{' '}
              {person.family.children.map((child, index) => {
                if (index < person.family.children.length - 1) {
                  return child + ', '
                }
                return child
              })}
            </h3>
          </div>
        </div>
      </section>

      {/* Addresses */}
      <section className={styles.addresses}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <TbAddressBook />
            <span>Addresses</span>
          </h1>
          <div className={styles.right}>
            <h3>
              <span>Home:</span> {person.addresses.home}
            </h3>
            <h3>
              <span>Work:</span> {person.addresses.work}
            </h3>
          </div>
        </div>
      </section>

      {/* Transactions */}
      <section className={styles.family}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <FaFileInvoiceDollar />
            <span>Transactions</span>
          </h1>
          <div className={styles.right}>
            {person.transactions.map((t, index) => (
              <>
                <h3>
                  <span>{t.date}</span>
                  <br />
                  <p>
                    {t.amount} <span>spent on</span> {t.description}
                  </p>
                </h3>
              </>
            ))}
          </div>
        </div>
      </section>

      {/*Health Record*/}
      <section className={styles.family}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <RiMentalHealthFill />
            Health record
          </h1>
          <div className={styles.right}>
            <h3>
              <span>Height:</span> {person.health_record.height}
            </h3>
            <h3>
              <span>Weight:</span> {person.health_record.weight}
            </h3>
            <h3>
              <span>Conditions:</span>{' '}
              {person.health_record.conditions.map((c, index) => {
                if (index < person.health_record.conditions.length - 1) {
                  return c + ', '
                }
                return c
              })}
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}
export default Info
